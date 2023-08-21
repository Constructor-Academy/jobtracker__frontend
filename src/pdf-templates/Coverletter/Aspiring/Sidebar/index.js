/* eslint-disable react/forbid-component-props */
import {View, Text, StyleSheet} from '@react-pdf/renderer'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {formatPhoneNumberIntl} from 'react-phone-number-input'

import {getFullName} from '../../helpers'
import styles from '../styles'


const Sidebar = ({user, job, mainColor}) => {
    const {t} = useTranslation()
    const getUserAddress = () => {
        const {street, zip, city, country} = user
        let result = ''
        if(street !== ''){
            result += street
        }
        if(zip !== ''){
            if(result !== '') result += '\n'
            result += zip
        }
        if(city !== ''){
            if(result !== '') result += ' '
            result += city
        }
        if((country !== '' || country !== 'Switzerland')){
            if(result !== '') result += '\n'
            result += country
        }
        return result
    }
    const userAddress = getUserAddress()

    const fullName = getFullName(user.first_name, user.last_name)

    const style = StyleSheet.create({
        sidebar_container: {
            display: 'flex',
            flex: 1,
            lineHeight: 2,
            minHeight: '100%',
            paddingTop: styles.space.L,
            paddingRight: styles.space.S,
            width: '32%',
            borderRight: 1,
            borderRightColor: mainColor,
            opacity: 0.6,
        },
        sidebar_block: {
            marginBottom: styles.space.XL,
            fontSize: styles.fontSize.S,
            zIndex: 1,
        },
        text_bold: {
            opacity: 1.5,
        },
    })

    return (
        <View style={style.sidebar_container}>
            <View style={style.sidebar_block}>
                <Text style={style.text_bold}>{t('profile:letter_gen.coverletter.template.to')}:</Text>
                {job.contact !== '' && <Text style={style.text_bold}>{job.contact}</Text>}
                {job.company !== '' && <Text>{job.company}</Text>}
                {job.company_street !== '' && <Text>{job.company_street}</Text>}
                {job.company_zip !== '' && job.company_city !== '' && <Text>{job.company_zip} {job.company_city}</Text>}
                {job.company_country !== '' && <Text>{job.company_country}</Text>}
            </View>

            <View style={style.sidebar_block}>
                <Text style={style.text_bold}>{t('profile:letter_gen.coverletter.template.from')}:</Text>
                {fullName !== '' && <Text style={style.text_bold}>{fullName}</Text>}
                {userAddress !== '' && <Text >{userAddress}</Text>}
                {user.phone !== '' && <Text >{formatPhoneNumberIntl(user.phone)}</Text>}
                {user.email !== '' && <Text >{user.email}</Text>}
            </View>
        </View>
    )
}

export default Sidebar
