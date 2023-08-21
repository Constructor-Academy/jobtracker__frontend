/* eslint-disable react/forbid-component-props */
import {Image, Link, Text, View} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'
import {formatPhoneNumberIntl} from 'react-phone-number-input'

import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import ContactItem from './ContactItem'
import styles from './styles'


const Header = ({user}) => {
    const {t} = useTranslation()
    const {colors, content} = useContext(MyContext)
    const userAddress = `${user.street !== '' ? user.street : ''}, ${
        user.zip !== '' ? user.zip : ''
    } ${user.city !== '' ? user.city : ''}`

    return (
        <View style={[styles.container, {backgroundColor: colors.mainColor, color: colors.contrastColor,}]}>
            {
                user.avatar && content.photo && (
                    <Image src={user.avatar} style={styles.avatar} />
                )
            }

            <View style={styles.summary_container}>
                <Text style={styles.summary_name}>
                    {user.first_name} {user.last_name}
                </Text>
                {
                    user.user_description !== '' && (
                        <Text style={styles.summary_description}>
                            {user.user_description}
                        </Text>
                    )
                }
            </View>

            <View style={styles.contact_container}>
                {
                    user.email !== '' && (
                        <ContactItem icon="email">
                            <Link
                                mailto={user.email}
                                style={[styles.contact_item_content, {color: colors.contrastColor, textDecorationColor: colors.mainColor}]}
                            >
                                {user.email}
                            </Link>
                        </ContactItem>
                    )
                }

                {
                    user.phone !== '' && (
                        <ContactItem icon="call">
                            <Text style={styles.contact_item_content}>
                                {formatPhoneNumberIntl(user.phone)}
                            </Text>
                        </ContactItem>
                    )
                }

                {
                    user.github_profile !== '' && (
                        <ContactItem icon="code">
                            <Link
                                src={user.github_profile}
                                style={styles.contact_item_content}
                            >
                                {t('profile:cv_gen:content.github_profile')}
                            </Link>
                        </ContactItem>
                    )
                }

                {
                    user.linkedin_profile !== '' && (
                        <ContactItem icon="group">
                            <Link
                                src={user.linkedin_profile}
                                style={styles.contact_item_content}
                            >
                                {t('profile:cv_gen:content.linkedin_profile')}
                            </Link>
                        </ContactItem>
                    )
                }

                {
                    userAddress !== '' && (
                        <ContactItem icon="location_on">
                            <Text style={styles.contact_item_content}>
                                {userAddress}
                            </Text>
                        </ContactItem>
                    )
                }
            </View>
        </View>
    )
}

export default Header
