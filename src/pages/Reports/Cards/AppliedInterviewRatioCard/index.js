import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import business from '../../../../assets/business_icon.png'
import decrease from '../../../../assets/decrease.svg'
import increase from '../../../../assets/increase.svg'
import same from '../../../../assets/same.svg'
import {CardContainer} from '../../../../style/containers'




const AppliedInterviewRatioCard = () => {
    const {t} = useTranslation()
    const jobs = useSelector((state) => state.jobsReducer.jobs)
    const interviewAppliedRatio = (
        ((jobs.IN.length + jobs.OF.length + jobs.AC.length) /
            (jobs.AP.length +
                jobs.IN.length +
                jobs.OF.length +
                jobs.AC.length)) *
        100
    ).toFixed(2)

    return (
        <CardContainer
            color={
                interviewAppliedRatio > 0
                    ? '#00ab00'
                    : interviewAppliedRatio === 0
                        ? 'orange'
                        : 'red'
            }
        >
            <div>
                <label>{t('reports:interview_ratio')}</label>
                <span>
                    {
                        interviewAppliedRatio === 'NaN'
                            ? '-'
                            : `${interviewAppliedRatio}%`
                    }
                </span>
                <p>
                    <img
                        alt="arrow_up"
                        src={
                            interviewAppliedRatio > 0
                                ? increase
                                : interviewAppliedRatio === 'NaN'
                                    ? same
                                    : decrease
                        }
                    />
                    <b>
                        {
                            interviewAppliedRatio === 'NaN'
                                ? '-'
                                : `${interviewAppliedRatio}%`
                        }
                    </b>
                    {t('reports:this_week')}
                </p>
            </div>
            <img alt="business" src={business} />
        </CardContainer>
    )
}

export default AppliedInterviewRatioCard
