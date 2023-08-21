import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Loader from '../../components/Loader'
import PopUpMessages from '../../components/PopUpMessages'
import {getJobSuggestionsFromSkillgapAction, resetJobSuggestionsAction} from '../../store/actions/jobAction'
import {BasePageContainerStyled, PageContentsContainerDefault,} from '../../style/containers'
import FillProfileOrUploadCV from './FillProfileOrUploadCV'
import JobSuggestionsError from './JobSuggestionsError'
import JobSuggestionsList from './JobSuggestionsList'


const JobSuggestions = () => {
    const [uploadedViaCv, setUploadedViaCv] = useState(false)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const {jobsSuggestions} = useSelector(state => state.jobsReducer)
    const messages = useSelector((state) => state.messageReducer)

    useEffect(() => {
        const getJobSuggestions = async () => await dispatch(getJobSuggestionsFromSkillgapAction())
        getJobSuggestions().then(() => {
            setLoading(false)
        })
    }, [dispatch, setLoading])

    useEffect(() => {
        if (uploadedViaCv) {
            return () => dispatch(resetJobSuggestionsAction())
        }
    }, [dispatch, uploadedViaCv])

    const content = () => {
        if (loading) {
            return <Loader avoidSidebar />
        } else if (Array.isArray(jobsSuggestions)) {
            if (jobsSuggestions.length) {
                return (
                    <JobSuggestionsList jobsSuggestions={jobsSuggestions} />
                )
            } else {
                return <JobSuggestionsError />
            }
        }
        else {
            return <FillProfileOrUploadCV setUploadedViaCv={setUploadedViaCv} />
        }
    }

    return (
        <BasePageContainerStyled>
            <PageContentsContainerDefault>
                {content()}
                {messages && <PopUpMessages messages={messages} />}
            </PageContentsContainerDefault>
        </BasePageContainerStyled>
    )
}

export default JobSuggestions
