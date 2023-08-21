import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import formular from '../../../../assets/formular.png'
import {CardContainer} from '../../../../style/containers'


const TotalJobsCard = () => {
    const {t} = useTranslation()
    const totalJobs = useSelector((state) => state.jobsReducer.jobsAmount)

    return (
        <CardContainer totalJobs>
            <div>
                <label>{t('reports:jobs.total')}</label>
                <span>{totalJobs}</span>
                {t('reports:jobs.all_stages')}
            </div>
            <img alt="formular" src={formular} />
        </CardContainer>
    )
}

export default TotalJobsCard
