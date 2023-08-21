import moment from 'moment'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import decrease from '../../../../assets/decrease.svg'
import increase from '../../../../assets/increase.svg'
import laptop from '../../../../assets/laptop_blue.png'
import same from '../../../../assets/same.svg'
import {CardContainer} from '../../../../style/containers'



const JobsCreatedThisWeek = () => {
    const {t} = useTranslation()
    const totalJobs = useSelector(state => state.jobsReducer.jobsAmount)
    const jobs = useSelector(state => state.jobsReducer.jobs)
    const allJobsArray = [...jobs.WH, ...jobs.AP, ...jobs.IN, ...jobs.OF, ...jobs.AC, ...jobs.RJ]
    const oneWeekAgo = moment().subtract(10, 'days').calendar()
    const today = moment()
    let justCreatedJobs = []
    allJobsArray.forEach(job => {
        if(moment(job.created).isBetween(oneWeekAgo, today)){
            justCreatedJobs.push(job)
        }
    })
    const jobsCreatedLastWeek = ((justCreatedJobs.length / totalJobs) * 100).toFixed(2)

    return (
        <CardContainer
            color={justCreatedJobs.length > 0 ? '#00ab00' : justCreatedJobs.length === 0 ? 'orange' : 'red'}
        >
            <div>
                <label>{t('reports:jobs.weekly')}</label>
                <span>{justCreatedJobs.length}</span>
                <p>
                    <img alt="arrow-down_up" src={justCreatedJobs.length > 0 ? increase : justCreatedJobs.length === 0 ? same : decrease} />
                    <b>{`${jobsCreatedLastWeek}%`}</b>
                    {t('reports:this_week')}
                </p>
            </div>
            <img alt="laptop" src={laptop} />
        </CardContainer>
    )
}

export default JobsCreatedThisWeek
