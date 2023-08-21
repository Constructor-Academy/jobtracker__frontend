import React, {useState, useEffect, useCallback} from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

import Axios from '../../axios'
import {
    ProfilePageContainer,
    ProfileWidthContainer,
    ProfileContentsContainer,
    ProfileLeftColumnContainer,
    ProfileRightColumnContainer,
} from '../../style/component-based/profile'
import {BasePageContainerStyled} from '../../style/containers'
import AddCategory from './Category/AddCategory'
import CategoriesList from './Category/CategoriesList'
import Education from './Education'
import ProfileCompleteness from './ProfileCompleteness'
import ProfileContact from './ProfileContact'
import ProfileDelete from './ProfileDelete'
import ProfileHeader from './ProfileHeader'
import ProfilePDF from './ProfilePDF'
import ProfilePersonal from './ProfilePersonal'
import WorkExperience from './WorkExperience'


const ProfilePage = () => {
    const {user, accessToken} = useSelector((state) => state.userLoginReducer)
    const {id} = useParams()
    const [userData, setUserData] = useState(user)
    const [editable, setEditable] = useState(true)
    const [preventModalBackgroundScroll, setPreventModalBackgroundScroll] = useState(false)

    const getForeignUser = useCallback((id) => {
        const config = {
            headers: {Authorization: `Bearer ${accessToken}`},
        }
        Axios.get(`users/${id}`, config)
            .then((response) => {
                setUserData(response.data)
                setEditable(false)
            })
            .catch((error) => {
                console.log('user data retreival failed', error.response.data)
            })
    }, [accessToken])

    useEffect(() => {
        if(id){
            getForeignUser(id)
        } else {
            setUserData(user)
        }
    }, [id, user, getForeignUser])

    return (
        <BasePageContainerStyled>
            <ProfilePageContainer preventModalBackgroundScroll={preventModalBackgroundScroll}>
                <ProfileWidthContainer>
                    <ProfileHeader editable={editable} user={userData} />
                    <ProfileCompleteness completed={user.profile_completeness} setPreventModalBackgroundScroll={setPreventModalBackgroundScroll} />
                    <ProfileContentsContainer>
                        <ProfileLeftColumnContainer>
                            <WorkExperience
                                editable={editable}
                                user={userData}
                            />
                            <Education editable={editable} user={userData} />
                            <CategoriesList editable={editable} />
                            <AddCategory />
                        </ProfileLeftColumnContainer>
                        <ProfileRightColumnContainer>
                            <ProfilePDF setPreventModalBackgroundScroll={setPreventModalBackgroundScroll} />
                            <ProfileContact
                                editable={editable}
                                user={userData}
                            />
                            <ProfilePersonal
                                editable={editable}
                                user={userData}
                            />
                            <ProfileDelete />
                        </ProfileRightColumnContainer>
                    </ProfileContentsContainer>
                </ProfileWidthContainer>
            </ProfilePageContainer>
        </BasePageContainerStyled>
    )
}

export default ProfilePage
