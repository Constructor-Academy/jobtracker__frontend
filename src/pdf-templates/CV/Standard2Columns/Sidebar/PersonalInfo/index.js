/* eslint-disable react/forbid-component-props */
import {View, Text} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'

import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import Headline from '../Headline'
import styles from './styles'

const userIcon = '\uf2bd'


const PersonalInfo = ({user}) => {
    const {t} = useTranslation()
    const {content} = useContext(MyContext)

    return (
        <View style={styles.page_left_content_block}>
            <Headline icon={userIcon} title={t('profile:cv_gen:content.personal_info')} />

            {
                content.dob && user.date_of_birth !== '' && (
                    <Text style={styles.page_left_personal_item}>
                        {t('profile:cv_gen:content.dob')}: {user.date_of_birth}
                    </Text>
                )
            }

            {
                user.nationality !== '' && content.nationality && (
                    <Text style={styles.page_left_personal_item}>
                        {t('profile:cv_gen:content.nationality')}: {user.nationality}
                    </Text>
                )
            }

            {
                content.permit && user.permit !== '' && user.permit !== '-' && user.permit !== 'Switzerland' && user.permit !== 'Schweiz' && (
                    <Text style={styles.page_left_personal_item}>
                        Permit: {user.permit}
                    </Text>
                )
            }
        </View>
    )
}

export default PersonalInfo
