import React, {useState} from 'react'

import EditExperience from '../EditExperience'
import ViewExperience from '../ViewExperience'

const WorkTile = ({jobData, editable}) => {
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => setEditMode(state => !state)

    if (editMode) {
        return (
            <EditExperience
                jobData={jobData}
                toggleEditMode={toggleEditMode}
            />
        )
    }
    return (
        <ViewExperience
            editable={editable}
            jobData={jobData}
            toggleEditMode={toggleEditMode}
        />
    )
}

export default WorkTile
