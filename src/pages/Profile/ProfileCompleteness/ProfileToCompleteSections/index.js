import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components/macro'

import {BaseButton} from '../../../../style/buttons'
import {ModalBackgroundWithSidebar} from '../../../../style/containers'
import {device} from '../../../../style/devices'
import AddEducation from '../../Education/AddEducation'
import ProfileContactEdit from '../../ProfileContact/ProfileContactEdit'
import ProfileHeaderEdit from '../../ProfileHeader/ProfileHeaderEdit'
import ProfilePersonalEdit from '../../ProfilePersonal/ProfilePersonalEdit'
import AddExperience from '../../WorkExperience/AddExperience'


const ProfileToCompleteSectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-around;
    }
`

const SectionButton = styled(BaseButton)`
    margin-top: ${props => props.theme.spaceS};
    text-transform: capitalize;
    width: 180px;
`

const ModalContentContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding: ${props => props.theme.spaceM};
    border-radius: 8px;
    background-color: #fff;
    @media ${device.laptop} {
        width: 60%;
        height: auto;
    }
`

const ScrollWrapper = styled.div`
    max-height: 100%;
    overflow: scroll;
    background-color: #fff;
`

const ProfileToCompleteSections = ({sections, setPreventModalBackgroundScroll=() => {}}) => {
    const {t} = useTranslation()
    const [modalToShow, setModalToShow] = useState(null)

    const onCloseHandler = () => {
        setModalToShow(null)
        setPreventModalBackgroundScroll(false)
    }

    const onClickHandler = e => {
        const name = e.target.name
        switch(name) {
        case 'general':
        case 'skills':
        case 'languages':
            setModalToShow(<ProfileHeaderEdit closeEditMode={onCloseHandler} />)
            setPreventModalBackgroundScroll(true)
            break
        case 'experiences':
            setModalToShow(<AddExperience addToggle={onCloseHandler} />)
            setPreventModalBackgroundScroll(true)
            break
        case 'educations':
            setModalToShow(<AddEducation addToggle={onCloseHandler} />)
            setPreventModalBackgroundScroll(true)
            break
        case 'contact':
            setModalToShow(<ProfileContactEdit closeEditMode={onCloseHandler} />)
            setPreventModalBackgroundScroll(true)
            break
        case 'personal':
            setModalToShow(<ProfilePersonalEdit closeEditMode={onCloseHandler} />)
            setPreventModalBackgroundScroll(true)
            break
        default:
            return modalToShow
        }
    }

    const getI18nValue = name => {
        switch(name) {
        case 'general':
            return t('profile:sections.general')
        case 'skills':
            return t('profile:sections.skills')
        case 'languages':
            return t('profile:sections.languages')
        case 'experiences':
            return t('profile:sections.experiences')
        case 'educations':
            return t('profile:sections.educations')
        case 'contact':
            return t('profile:sections.contact')
        case 'personal':
            return t('profile:sections.personal')
        default:
            return ''
        }
    }

    return (
        <ProfileToCompleteSectionsContainer>
            {
                sections.map(section => {
                    return <SectionButton key={section} name={section} onClick={onClickHandler}>{getI18nValue(section)}</SectionButton>
                })
            }

            {
                modalToShow && (
                    <ModalBackgroundWithSidebar>
                        <ModalContentContainer>
                            <ScrollWrapper>
                                {modalToShow}
                            </ScrollWrapper>
                        </ModalContentContainer>
                    </ModalBackgroundWithSidebar>)
            }
        </ProfileToCompleteSectionsContainer>
    )
}

export default ProfileToCompleteSections
