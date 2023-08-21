import React, {useState} from 'react'

import EditEvent from './EditEvent'
import ViewEvent from './ViewEvent'

const Event = ({eventData, editable}) => {
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    return (
        editMode ? (
            <EditEvent
                eventData={eventData}
                toggleEditMode={toggleEditMode}
            />
        ) : (
            <ViewEvent
                editable={editable}
                eventData={eventData}
                toggleEditMode={toggleEditMode}
            />
        )
    )
}

export default Event
