/* eslint-disable react/forbid-component-props */
import {View} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'

import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import ExperienceList from '../ExperienceList'
import ContactInfo from './ContactInfo'
import styles from './styles'
import TagList from './TagList'


const ColumnLeft = ({user}) => {
    const {t} = useTranslation()
    const {content, showLanguageLevel, showSkillLevel} = useContext(MyContext)

    return (
        <View style={styles.page_content_left}>
            <ContactInfo user={user} />

            {content.languages && Boolean(user.languages.length) && <TagList list={user.languages} showLevel={showLanguageLevel} title={t('profile:cv_gen:content.languages')} />}

            {content.skills && Boolean(user.skills.length) && <TagList list={user.skills} showLevel={showSkillLevel} title={t('profile:cv_gen:content.skills')} /> }

            {Boolean(user.educations.length) && <ExperienceList isLastCategory list={user.educations} title={t('profile:cv_gen:content.education')} />}
        </View>
    )
}

export default ColumnLeft
