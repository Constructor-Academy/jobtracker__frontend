/* eslint-disable react/forbid-component-props */
import {Link, Text} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'
import {formatPhoneNumberIntl} from 'react-phone-number-input'

import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import ContentBlock from '../../ContentBlock'
import styles from './styles'


const ContactInfo = ({user}) => {
    const {t} = useTranslation()
    const {colors} = useContext(MyContext)

    const userAddressPart1 = `${user.street !== '' ? user.street : ''},`
    const userAddressPart2 = `${user.zip !== '' ? user.zip : ''} ${user.city !== '' ? user.city : ''}, ${user.country !== '' ? user.country : ''}`

    return (
        <ContentBlock title={t('profile:cv_gen.content.contact_info_short')}>
            {
                userAddressPart1 !== '' && (
                    <Text style={styles.contact_info_item}>
                        {userAddressPart1}
                    </Text>
                )
            }

            {
                userAddressPart2 !== '' && (
                    <Text style={styles.contact_info_item}>
                        {userAddressPart2}
                    </Text>
                )
            }

            {
                user.phone !== '' && (
                    <Text style={styles.contact_info_item}>
                        {formatPhoneNumberIntl(user.phone)}
                    </Text>
                )
            }

            {
                user.email !== '' && (
                    <Text style={styles.contact_info_item}>
                        {user.email}
                    </Text>
                )
            }

            {
                user.linkedin_profile !== '' && (
                    <Link
                        href={user.linkedin_profile}
                        style={[styles.contact_info_link, {color: colors.fontColor}]}
                        target="_blank"
                    >
                        {t('profile:cv_gen:content.linkedin_profile')}
                    </Link>
                )
            }

            {
                user.github_profile !== '' && (
                    <Link
                        href={user.github_profile}
                        style={[styles.contact_info_link, {color: colors.fontColor}]}
                        target="_blank"
                    >
                        {t('profile:cv_gen:content.github_profile')}
                    </Link>
                )
            }
        </ContentBlock>
    )
}

export default ContactInfo
