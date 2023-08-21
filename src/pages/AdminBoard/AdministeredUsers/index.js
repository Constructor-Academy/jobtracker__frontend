import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

import UserProfileCard from '../../../components/UserProfileCard'
import {
    getJobsAction,
    setDisplayedUsers,
} from '../../../store/actions/jobAction'
import {AdministeredUserContainer} from '../../../style/containers'


const AdministeredUsers = ({dispatch, administeredUsers}) => {
    const history = useHistory()
    const handleUserSelected = async (e, user_id) => {
        let user = administeredUsers.find(
            (user) => user.id === Number(user_id)
        )
        await dispatch(setDisplayedUsers(user))
        await dispatch(getJobsAction(user.id))
        history.push('/dashboard')
    }

    return (
        <AdministeredUserContainer>
            {
                administeredUsers.map(user => {
                    return (
                        <UserProfileCard
                            handleUserSelected={handleUserSelected}
                            key={user.id}
                            user={user}
                        />
                    )
                })
            }
        </AdministeredUserContainer>
    )
}

export default withRouter(connect()(AdministeredUsers))
