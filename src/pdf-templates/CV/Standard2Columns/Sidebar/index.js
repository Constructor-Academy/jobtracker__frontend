/* eslint-disable react/forbid-component-props */
import {View} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'

import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import AvatarAndSummary from './AvatarAndSummary'
import ContactInfo from './ContactInfo'
import PersonalInfo from './PersonalInfo'
import styles from './styles'
import TagList from './TagList'

const shieldIcon = '\uf132'
const languagesIcon = '\uf1ab'


const Sidebar = ({user}) => {
    const {t} = useTranslation()
    const {colors, content, showSkillLevel, showLanguageLevel} = useContext(MyContext)
    const showPersonal =
        (content.dob && user.date_of_birth !== '') ||
        (content.nationality && user.nationality !== '') ||
        (content.permit && user.permit !== '')

    return (
        <View style={[styles.sidebar_container, {backgroundColor: colors.mainColor, color: colors.contrastColor}]}>
            <AvatarAndSummary user={user} />
            {showPersonal && <PersonalInfo user={user} />}
            {Boolean(user.skills.length) && content.skills && <TagList icon={shieldIcon} list={user.skills} showLevel={showSkillLevel} title={t('profile:cv_gen:content.skills')} />}
            {Boolean(user.languages.length) && content.languages && <TagList icon={languagesIcon} list={user.languages} showLevel={showLanguageLevel} title={t('profile:cv_gen:content.languages')} />}
            <ContactInfo user={user} />
        </View>
    )
}

export default Sidebar
