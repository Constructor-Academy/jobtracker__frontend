import {
    LOGOUT,
    SET_DISPLAYED_USERS,
    SET_JOBS,
    REVERT_SET_JOBS,
    SET_USERS,
    EDITING_JOB,
    SET_SUGGESTED_JOBS,
    RESET_SUGGESTED_JOBS,
    DELETE_REJECTED,
} from '../types'


const initialState = {
    jobs: {
        'WH': [],
        'AP': [],
        'IN': [],
        'OF': [],
        'AC': [],
        'RJ': []
    },
    jobsAmount: null,
    allJobsArray: [],
    jobsSuggestions: null,
    displayedUser: {
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        username: null,
        is_Admin: null,
        last_login: null
    },
    administeredUsers: [],
    edit: {
        editing: false,
        job: {}
    },
}

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS: {
            return {
                ...state,
                jobsAmount: action.payload.length,
                jobs: {
                    'WH': action.payload.filter(job => job.status === 'WH'),
                    'AP': action.payload.filter(job => job.status === 'AP'),
                    'IN': action.payload.filter(job => job.status === 'IN'),
                    'OF': action.payload.filter(job => job.status === 'OF'),
                    'AC': action.payload.filter(job => job.status === 'AC'),
                    'RJ': action.payload.filter(job => job.status === 'RJ')
                },
                allJobsArray: action.payload
            }
        }
        case REVERT_SET_JOBS: {
            return {
                ...state,
                jobs: action.payload,
            }
        }
        case SET_SUGGESTED_JOBS: {
            return {
                ...state,
                jobsSuggestions: action.payload
            }
        }
        case RESET_SUGGESTED_JOBS: {
            return {
                ...state,
                jobsSuggestions: null,
            }
        }
        case SET_USERS: {
            return {
                ...state,
                administeredUsers: action.payload
            }
        }
        case SET_DISPLAYED_USERS: {
            return {
                ...state,
                displayedUser: action.payload
            }
        }
        case EDITING_JOB: {
            return {
                ...state,
                edit: action.payload
            }
        }
        case LOGOUT: {
            return initialState
        }
        case DELETE_REJECTED: {
            const jobsCopy = { ...state.jobs }
            const numDeletedJobs = jobsCopy['RJ'].length
            jobsCopy['RJ'] = []
            const allJobs = [].concat(...Object.values(jobsCopy));
            return {
                ...state,
                jobs: jobsCopy,
                jobsAmount: state.jobsAmount - numDeletedJobs,
                allJobsArray: allJobs
            }
        }
        default:
            return state
    }
}
