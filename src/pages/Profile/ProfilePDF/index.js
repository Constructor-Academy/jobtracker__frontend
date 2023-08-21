import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

import {updateJobContent} from '../../../store/actions/jobAction'
import {BaseButton} from '../../../style/buttons'
import {
    ProfileCardContainer,
    ButtonWrapperPDF,
} from '../../../style/component-based/profile'
import OverlayCoverLetter from '../OverlayCoverLetter'
import OverlayCurriculum from '../OverlayCurriculum'
import OverlayJobSelector from '../OverlayJobSelector'


const ProfilePDF = ({setPreventModalBackgroundScroll}) => {
    const {t} = useTranslation()
    const jobs = useSelector((state) => state.jobsReducer.allJobsArray)
    const dispatch = useDispatch()

    const [selectedJob, setSelectedJob] = useState(null)
    const [overlayCurriculumVisible, setOverlayCurriculumVisible] = useState(false)
    const [overlayJobSelectorVisible, setOverlayJobSelectorVisible] = useState(false)
    const [overlayCoverletterVisible, setOverlayCoverletterVisible] = useState(false)

    const openCurriculumOverlay = () => {
        setOverlayCurriculumVisible(true)
        setPreventModalBackgroundScroll(true)
    }

    const closeCurriculumOverlay = () => {
        setOverlayCurriculumVisible(false)
        setPreventModalBackgroundScroll(false)
    }

    const openCoverLetterOverlay = () => {
        setOverlayCoverletterVisible(true)
        setPreventModalBackgroundScroll(true)
    }

    const cancelCloseCoverletterOverlayHandler = () => {
        setOverlayCoverletterVisible(false)
        setSelectedJob(null)
        setPreventModalBackgroundScroll(false)
    }

    const saveCloseCoverletterOverlayHandler = async () => {
        await dispatch(updateJobContent(selectedJob))
        setOverlayCoverletterVisible(false)
        setSelectedJob(null)
        setPreventModalBackgroundScroll(false)
    }

    return (
        <>
            <ProfileCardContainer>
                <ButtonWrapperPDF>
                    <BaseButton
                        fullWidth
                        onClick={openCurriculumOverlay}
                    >
                        {t('profile:cv_gen.title')}
                    </BaseButton>
                    <BaseButton
                        fullWidth
                        onClick={() => setOverlayJobSelectorVisible(true)}
                    >
                        {t('profile:letter_gen.title')}
                    </BaseButton>
                </ButtonWrapperPDF>
            </ProfileCardContainer>

            {
                overlayCurriculumVisible && (
                    <OverlayCurriculum fnClose={closeCurriculumOverlay} />
                )
            }

            {
                overlayJobSelectorVisible && (
                    <OverlayJobSelector
                        fnClose={() => setOverlayJobSelectorVisible(false)}
                        jobs={jobs}
                        selectedJob={selectedJob}
                        setSelectedJob={setSelectedJob}
                        showCoverletter={openCoverLetterOverlay}
                    />
                )
            }

            {
                overlayCoverletterVisible && selectedJob && (
                    <OverlayCoverLetter
                        cancelCloseHandler={cancelCloseCoverletterOverlayHandler}
                        job={selectedJob}
                        saveCloseHandler={saveCloseCoverletterOverlayHandler}
                        updateJobData={setSelectedJob}
                    />
                )
            }
        </>
    )
}

export default ProfilePDF
