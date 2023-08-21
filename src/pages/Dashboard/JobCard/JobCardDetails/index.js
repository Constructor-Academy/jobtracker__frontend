import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import {deleteJobAction} from '../../../../store/actions/jobAction'
import {
    OverlayBackground,
    OverlayContainerForm,
} from '../../../../style/overlay'
import EditJob from './EditJob'
import ViewJob from './ViewJob'


const JobCardDetails = ({job, setShowJobDetails, setOverlayCoverLetterVisible,}) => {
    const dispatch = useDispatch()
    const [showEdit, setShowEdit] = useState(false)

    const deleteHandler = (job) => {
        dispatch(deleteJobAction(job))
    }
    const handleBackgroundClick = (event) => {
        if (event.target.id === 'overlay-background') {
            setShowJobDetails(false)
        }
    }

    return (
        <OverlayBackground id='overlay-background' onClick={(e) => { handleBackgroundClick(e) }}>
            <OverlayContainerForm>
                {
                    showEdit ? (
                        <EditJob closeEdit={() => setShowEdit(false)} job={job} />
                    ) : (
                        <ViewJob
                            closeOverlay={() => setShowJobDetails(false)}
                            deleteJob={() => deleteHandler(job)}
                            job={job}
                            openEdit={() => setShowEdit(true)}
                            showCoverletter={
                                () =>
                                    setOverlayCoverLetterVisible(true)
                            }
                        />
                    )
                }
            </OverlayContainerForm>
        </OverlayBackground>
    )
}

export default JobCardDetails
