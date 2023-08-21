import moment from 'moment'
import React, {useState} from 'react'
import {Draggable} from 'react-beautiful-dnd'
import {useTranslation} from 'react-i18next'
import {connect, useDispatch} from 'react-redux'


import {getJobIcon} from '../../../helpers'
import {updateJobContent} from '../../../store/actions/jobAction'
import {
    JobCardContainer,
    JobCardHeaderContainer,
    JobCardHeaderDetails,
    JobCardJobTitle,
    JobCardHeaderIcon,
    JobCardDate,
    JobCardCompany,
} from '../../../style/component-based/job'
import OverlayCoverLetter from '../../Profile/OverlayCoverLetter'
import JobCardDetails from './JobCardDetails'


const JobCard = ({job}) => {
    const [showJobDetails, setShowJobDetails] = useState(false)
    const [overlayCoverLetterVisible, setOverlayCoverLetterVisible] = useState(false)
    const [jobData, setJobData] = useState(job)
    const dispatch = useDispatch()
    const {t, i18n} = useTranslation()
    moment.locale(i18n.language)

    const saveCloseCoverletterOverlayHandler = async () => {
        await dispatch(updateJobContent(jobData))
        setOverlayCoverLetterVisible(false)
    }

    return (
        <>
            {
                showJobDetails && (
                    <JobCardDetails
                        job={job}
                        setOverlayCoverLetterVisible={setOverlayCoverLetterVisible}
                        setShowJobDetails={setShowJobDetails}
                        showJobDetails={showJobDetails}
                    />
                )
            }
            <Draggable draggableId={job.id} index={job.index}>
                {
                    (provided) => (
                        <JobCardContainer
                            onClick={() => setShowJobDetails(!showJobDetails)}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <JobCardHeaderContainer>
                                <JobCardHeaderDetails>
                                    <JobCardJobTitle
                                        href={job.url}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {job.title}
                                    </JobCardJobTitle>
                                    <JobCardCompany>{job.company}</JobCardCompany>
                                    <JobCardDate>
                                        {t('dashboard:jobs.added_on')} {moment(job.created).format('ll')}
                                    </JobCardDate>
                                </JobCardHeaderDetails>
                                <JobCardHeaderIcon src={getJobIcon(job.category)} />
                            </JobCardHeaderContainer>
                        </JobCardContainer>
                    )
                }
            </Draggable>
            {
                overlayCoverLetterVisible && (
                    <OverlayCoverLetter
                        cancelCloseHandler={() => setOverlayCoverLetterVisible(false)}
                        job={jobData}
                        saveCloseHandler={saveCloseCoverletterOverlayHandler}
                        setOverlayCoverLetterVisible={setOverlayCoverLetterVisible}
                        updateJobData={setJobData}
                    />
                )
            }
        </>
    )
}

export default connect()(JobCard)
