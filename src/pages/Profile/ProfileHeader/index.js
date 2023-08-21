import React, {useState} from 'react'

import {ProfileCardContainer} from '../../../style/component-based/profile'
import ProfileHeaderDisplay from './ProfileHeaderDisplay'
import ProfileHeaderEdit from './ProfileHeaderEdit'

const ProfileHeader = ({user, editable}) => {
    const [showEdit, setShowEdit] = useState(false)

    return (
        <ProfileCardContainer>
            {
                showEdit ? (
                    <ProfileHeaderEdit
                        closeEditMode={() => setShowEdit(false)}
                        showEdit={showEdit}
                    />
                ) : (
                    <ProfileHeaderDisplay
                        editable={editable}
                        enableEditMode={() => setShowEdit(true)}
                        user={user}
                    />
                )
            }
        </ProfileCardContainer>
    )
}

export default ProfileHeader
