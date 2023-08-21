/* eslint-disable react/forbid-component-props */
import {
    View,
    Text,
} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'

import {convertToBirthDate} from '../../../../../helpers'
import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import Headline from '../Headline'
import styles from './styles'


const PersonalInfo = ({user}) => {
    const {t} = useTranslation()
    const {content} = useContext(MyContext)

    return (
        <View style={styles.page_left_content_block}>
            <Headline title={t('profile:cv_gen:content.personal_info')} />

            {
                content.dob && Boolean(user.date_of_birth) && (
                    <Text style={styles.page_left_personal_item}>
                        {t('profile:cv_gen:content.dob')}: {convertToBirthDate(user.date_of_birth)}
                    </Text>
                )
            }

            {
                content.nationality && Boolean(user.nationality) && (
                    <Text style={styles.page_left_personal_item}>
                        {t('profile:cv_gen:content.nationality')}: {user.nationality}
                    </Text>
                )
            }

            {
                content.permit && Boolean(user.permit) && user.permit !== '-' && user.permit !== 'Switzerland' && user.permit !== 'Schweiz' && (
                    <Text style={styles.page_left_personal_item}>Permit: {user.permit}</Text>
                )
            }
        </View>
    )
}

export default PersonalInfo
