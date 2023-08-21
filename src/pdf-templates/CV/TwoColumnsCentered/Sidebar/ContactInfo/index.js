/* eslint-disable react/forbid-component-props */
import {
    View,
    Text,
    Link,
} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'
import {formatPhoneNumberIntl} from 'react-phone-number-input'

import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import Headline from '../Headline'
import styles from './styles'


const ContactInfo = ({user}) => {
    const {t} = useTranslation()
    const {colors} = useContext(MyContext)
    const userAddress = `${user.street !== '' ? user.street : ''}, ${
        user.zip !== '' ? user.zip : ''
    } ${user.city !== '' ? user.city : ''}`

    return (
        <View style={styles.page_left_content_block} wrap={false}>
            <Headline title={t('profile:cv_gen:content.contact_info')} />

            <View style={styles.contact_info_container}>
                {
                    Boolean(user.email) && (
                        <Link
                            mailto={user.email}
                            style={[styles.contact_info_item_content, {color: colors.contrastColor}]}
                        >
                            {user.email}
                        </Link>
                    )
                }

                {
                    Boolean(user.phone) && (
                        <Text style={[styles.contact_info_item_content, {color: colors.contrastColor}]}>
                            {formatPhoneNumberIntl(user.phone)}
                        </Text>
                    )
                }

                {
                    Boolean(user.github_profile) && (
                        <Link
                            src={user.github_profile}
                            style={[styles.contact_info_item_content, {color: colors.contrastColor}]}
                        >
                            {t('profile:cv_gen:content.github_profile')}
                        </Link>
                    )
                }

                {
                    Boolean(user.linkedin_profile) && (
                        <Link
                            src={user.linkedin_profile}
                            style={[styles.contact_info_item_content, {color: colors.contrastColor}]}
                        >
                            {t('profile:cv_gen:content.linkedin_profile')}
                        </Link>
                    )
                }

                {
                    Boolean(userAddress) && (
                        <Text style={[styles.contact_info_item_content, {color: colors.contrastColor}]}>
                            {userAddress}
                        </Text>
                    )
                }
            </View>
        </View>
    )
}

export default ContactInfo
