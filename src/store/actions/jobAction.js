import axios from 'axios'
import Cookie from 'js-cookie'
import moment from 'moment'

import Axios from '../../axios'
import i18next from '../../i18n'
import {
    SET_JOBS,
    REVERT_SET_JOBS,
    SET_USERS,
    SET_DISPLAYED_USERS,
    EDITING_JOB,
    SET_SUGGESTED_JOBS,
    RESET_SUGGESTED_JOBS,
    DELETE_REJECTED
} from '../types'
import {addMessage} from './messageAction'


export const setJobs = (jobs) => {
    return {
        type: SET_JOBS,
        payload: jobs,
    }
}

export const revertSetJobs = (jobs) => {
    return {
        type: REVERT_SET_JOBS,
        payload: jobs,
    }
}

export const getJobsAction = (user_id = null) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            Authorization: `Bearer ${userLoginReducer.accessToken}`,
        },
    }
    let url = user_id === null ? 'jobs/' : `jobs/?user_id=${user_id}`
    const response = await Axios.get(url, config)
    dispatch(setJobs(response.data))
    return response.data
}

export const setJobsAction = (jobs) => async (dispatch, getState) => {
    try {
        let {userLoginReducer, jobsReducer} = getState()
        const current_jobs = jobsReducer.jobs
        const displayed_user_id = jobsReducer.displayedUser.id

        const config = {
            headers: {
                Authorization: `Bearer ${userLoginReducer.accessToken}`,
            },
        }
        let data = {
            jobs: [
                ...jobs.WH,
                ...jobs.AP,
                ...jobs.IN,
                ...jobs.OF,
                ...jobs.AC,
                ...jobs.RJ,
            ],
            for_user_id: displayed_user_id,
        }
        dispatch(setJobs(data['jobs']))
        try {
            const response = await Axios.post('jobs/update/', data, config)
            dispatch(setJobs(response.data))
            return response
        } catch (e) {
            const i18n = i18next
            dispatch(revertSetJobs(current_jobs))
            dispatch(
                addMessage({
                    detail: i18n.t('errors:general.unknown'),
                    type: 'warning',
                })
            )
        }
    } catch (e) {
        const i18n = i18next
        dispatch(
            addMessage({
                detail: i18n.t('errors:general.unknown'),
                type: 'warning',
            })
        )
    }
}

// with drag and drop position logic
export const updateJobAction = (updatedJob) => async (dispatch, getState) => {
    const {jobsReducer} = getState()
    const {jobs} = jobsReducer
    const data = {
        ...jobs,
        [updatedJob.status]: [...jobs[updatedJob.status].filter((job) => job.id !== updatedJob.id), updatedJob],
    }
    await dispatch(setJobsAction(data))
}

export const updateJobContent = (updatedJob) => async (dispatch, getState) => {
    let {accessToken} = getState().userLoginReducer
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }
    try {
        const response = await Axios.patch(`jobs/update/${updatedJob.id}/`, updatedJob, config)
        if(response.status >= 200 && response.status <= 299){
            const jobs = [...getState().jobsReducer.allJobsArray]
            const jobToUpdateIndex = jobs.findIndex(job => job.id === updatedJob.id)
            jobs.splice(jobToUpdateIndex, 1, response.data)
            dispatch(setJobs(jobs))
        } else {
            return false
        }
    } catch(e) {
        console.error(e)
        return false
    }
}

export const deleteJobAction = (deletedJob) => async (dispatch, getState) => {
    const {jobsReducer} = getState()
    const {jobs} = jobsReducer
    const data = {
        ...jobs,
        [deletedJob.status]: [...jobs[deletedJob.status].filter((job) => job.id !== deletedJob.id)],
    }
    await dispatch(setJobsAction(data))
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users,
    }
}

export const getAllUsers = () => async (dispatch, getState) => {
    let token = Cookie.get('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await Axios.get('users/', config)
    dispatch(setUsers(response.data))
    return response
}

export const setDisplayedUsers = (user) => {
    Cookie.set('displayedUserId', user.id, {secure: true})
    return {
        type: SET_DISPLAYED_USERS,
        payload: user,
    }
}

export const getDisplayedUser = (id) => async (dispatch, getState) => {
    let {userLoginReducer} = getState()
    const config = {
        headers: {
            Authorization: `Bearer ${userLoginReducer.accessToken}`,
        },
    }
    const response = await Axios.get(`users/${id}/`, config)
    dispatch(setDisplayedUsers(response.data))
}

export const setEditingJob = (job) => {
    return {
        type: EDITING_JOB,
        payload: {
            editing: true,
            job: job,
        },
    }
}

export const unsetEditingJob = () => {
    return {
        type: EDITING_JOB,
        payload: {
            editing: false,
            job: {},
        },
    }
}

const setJobSuggestions = (suggestions) => {
    return {
        type: SET_SUGGESTED_JOBS,
        payload: suggestions,
    }
}

export const resetJobSuggestionsAction = () => {
    return {
        type: RESET_SUGGESTED_JOBS,
    }
}

const filterSkillgapJobs = (jobs, dispatch) => {
    const maxAge = moment().subtract(31, 'days')
    // TODO: We got some jobs without company names. Filtering them out here and asked Albin to fix it on DS backend. Need to take out filter after it is fixed.
    // const filtered = jobs.filter(job => moment(job.date_published, 'DD.MM.YYYY').isAfter(maxAge))
    const filtered = jobs.filter(job => moment(job.date_published, 'DD.MM.YYYY').isAfter(maxAge) && job.company_name)
    if (!filtered.length) {
        const i18n = i18next
        dispatch(addMessage({
            detail: i18n.t('jobs:no_new_jobs'),
            type: 'warning',
        }))
    }
    return filtered
}

// get suggestions based on profile data
export const getJobSuggestionsFromSkillgapAction = () => async (dispatch, getState) => {
    const {accessToken} = getState().userLoginReducer
    const {allJobsArray} = getState().jobsReducer
    let trackedJobs
    let trackedJobsUrls
    // If a user hard reloads /jobs, then we need to fetch the tracked jobs to figure out if they are tracked already
    if (Array.isArray(allJobsArray) && allJobsArray.length === 0) {
        trackedJobs = await dispatch(getJobsAction())
        trackedJobsUrls = trackedJobs.map(job => job.url)
    } else {
        trackedJobsUrls = allJobsArray.map(job => job.url)
    }
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }
    try {
        const response = await Axios.get(`jobs/suggestions/`, config)
        if (response.status === 204) {
            return true
        }
        const suggestions = response.data

        const filteredSuggestions = filterSkillgapJobs(suggestions, dispatch)
        filteredSuggestions.forEach(job => {
            job['tracked'] = trackedJobsUrls.includes(job.url)
            return job
        })
        dispatch(setJobSuggestions(filteredSuggestions))
        return true
    } catch(e) {
        console.error(e)
        // the DS job suggestion model sometimes returns 500, so we need to handle that
        // setting the job suggestions to an empty array and then displaying an error message in the FE based on that
        dispatch(setJobSuggestions([]))
        return true
    }
}

// get suggestions based on cv upload
export const getJobSuggestionsFromCvSkillgapAction = (cv) => async (dispatch, getState) => {
    const {allJobsArray} = getState().jobsReducer
    let trackedJobs
    let trackedJobsUrls
    // If a user hard reloads /jobs, then we need to fetch the tracked jobs to figure out if they are tracked already
    if (Array.isArray(allJobsArray) && allJobsArray.length === 0) {
        trackedJobs = await dispatch(getJobsAction())
        trackedJobsUrls = trackedJobs.map(job => job.url)
    } else {
        trackedJobsUrls = allJobsArray.map(job => job.url)
    }
    const form_data = new FormData()
    form_data.append('file', cv)
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    }
    try {
        const response = await axios.post(`https://jobs.jobtracker.ai/get_skill_gap`, form_data, config)
        const suggestions = response.data
        const filteredSuggestions = filterSkillgapJobs(suggestions)
        filteredSuggestions.forEach(job => {
            job['tracked'] = trackedJobsUrls.includes(job.url)
            return job
        })
        dispatch(setJobSuggestions(filteredSuggestions))
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}

export const createSuggestedJobAction = (job) => async (dispatch, getState) => {
    const {accessToken, user} = getState().userLoginReducer
    const {jobs, allJobsArray, jobsSuggestions} = getState().jobsReducer
    let data = {
        url: job.url,
        title: job.job_title,
        company: job.company_name,
        status: 'WH',
        created: moment().utc(),
        index: jobs.WH.length,
        user: user.id,
    }
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }
    try {
        const response = await Axios.post(`jobs/`, data, config)
        const newJob = response.data
        const newJobsArray = [...allJobsArray, newJob]
        dispatch(setJobs(newJobsArray))
        const updatedJobsSuggestions = [...jobsSuggestions]
        const toUpdateIndex = updatedJobsSuggestions.findIndex(item => item.url === newJob.url)
        updatedJobsSuggestions[toUpdateIndex].tracked = true
        dispatch(setJobSuggestions(updatedJobsSuggestions))
        return true
    } catch(e) {
        console.error(e)
        return false
    }
}

export const deleteRejected = () => {
    return {
        type: DELETE_REJECTED,
    }
}

