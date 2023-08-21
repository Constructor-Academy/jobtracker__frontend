/* eslint-disable react/forbid-component-props */
import {Text, View} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'

import {convertToBirthDate} from '../../../../helpers'
import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import Headline from '../Headline'
import styles from './styles'


const PersonalInfo = ({user}) => {
    const {t} = useTranslation()
    const {colors, content} = useContext(MyContext)

    return (
        <View style={styles.page_content_block}>
            <View style={styles.page_content_block_title_wrapper}>
                <Headline icon="person" />
                <Text style={[styles.page_content_block_title, {color: colors.mainColor}]}>
                    {t('profile:cv_gen:content.personal_info')}
                </Text>
            </View>

            {
                user.date_of_birth !== '' && content.dob && (
                    <Text>
                        {t('profile:cv_gen:content.dob')}: {convertToBirthDate(user.date_of_birth)}
                    </Text>
                )
            }

            {
                content.nationality && user.nationality !== '' && (
                    <Text>
                        {t('profile:cv_gen:content.nationality')}: {user.nationality}
                    </Text>
                )
            }

            {
                content.permit && user.permit !== '' && user.permit !== '-' && user.permit !== 'Switzerland' && user.permit !== 'Schweiz' && (
                    <Text>{t('profile:cv_gen:content.permit')}: {user.permit}</Text>
                )
            }
        </View>
    )
}

export default PersonalInfo
