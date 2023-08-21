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
import ContactItem from './ContactItem'
import styles from './styles'

const contactIcon = '\uf2b9'
const emailIcon = '\uf199'
const phoneIcon = '\ue808'
const githubIcon = '\uf113'
const linkedinIcon = '\uf05c'
const homeIcon = '\u2302'


const ContactInfo = ({user}) => {
    const {t} = useTranslation()
    const {colors} = useContext(MyContext)
    const userAddress = `${user.street !== '' ? user.street : ''}, ${
        user.zip !== '' ? user.zip : ''
    } ${user.city !== '' ? user.city : ''}`

    return (
        <View style={styles.page_left_content_block} wrap={false}>
            <Headline icon={contactIcon} title={t('profile:cv_gen:content.contact_info')} />

            <View style={styles.contact_info_container}>
                {
                    user.email !== '' && (
                        <ContactItem icon={emailIcon}>
                            <Link
                                mailto={user.email}
                                style={[styles.contact_info_item_content, {color: colors.contrastColor}]}
                            >
                                {user.email}
                            </Link>
                        </ContactItem>
                    )
                }

                {
                    user.phone !== '' && (
                        <ContactItem icon={phoneIcon}>
                            <Text style={[styles.contact_info_item_content, {color: colors.contrastColor}]}>
                                {formatPhoneNumberIntl(user.phone)}
                            </Text>
                        </ContactItem>
                    )
                }

                {
                    user.github_profile !== '' && (
                        <ContactItem icon={githubIcon}>
                            <Link
                                src={user.github_profile}
                                style={[styles.contact_info_item_content, {color: colors.contrastColor}]}
                            >
                                {t('profile:cv_gen:content.github_profile')}
                            </Link>
                        </ContactItem>
                    )
                }

                {
                    user.linkedin_profile !== '' && (
                        <ContactItem icon={linkedinIcon}>
                            <Link
                                src={user.linkedin_profile}
                                style={[styles.contact_info_item_content, {color: colors.contrastColor}]}
                            >
                                {t('profile:cv_gen:content.linkedin_profile')}
                            </Link>
                        </ContactItem>
                    )
                }

                {
                    userAddress !== '' && (
                        <ContactItem icon={homeIcon}>
                            <Text style={[styles.contact_info_item_content, {color: colors.contrastColor}]}>
                                {userAddress}
                            </Text>
                        </ContactItem>
                    )
                }
            </View>
        </View>
    )
}

export default ContactInfo
