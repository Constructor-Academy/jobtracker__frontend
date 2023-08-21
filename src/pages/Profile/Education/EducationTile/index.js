import React, {useState} from 'react'

import EditEducation from '../EditEducation'
import ViewEducation from '../ViewEducation'

const EducationTile = ({educationData, editable}) => {
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => setEditMode(state => !state)

    return (
        editMode ? (
            <EditEducation
                educationData={educationData}
                toggleEditMode={toggleEditMode}
            />
        ) : (
            <ViewEducation
                editable={editable}
                educationData={educationData}
                toggleEditMode={toggleEditMode}
            />
        )
    )
}

export default EducationTile
