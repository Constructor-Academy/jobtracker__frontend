/* eslint-disable react/forbid-component-props */
import {View, Text, StyleSheet} from '@react-pdf/renderer'
import React from 'react'

import {getFullName} from '../../helpers'
import styles from '../styles'


const Header = ({user, application, mainColor}) => {
    const style = StyleSheet.create({
        header_container: {
            minWidth: '100%',
            paddingBottom: styles.space.L,
            borderBottom: 1,
            borderBottomColor: mainColor,
            fontWeight: 'bold',
            fontSize: styles.fontSize.XL,
            color: mainColor,
        },
        header_job_title: {
            textTransform: 'uppercase',
            paddingTop: styles.space.XS,
            fontWeight: 'medium',
            letterSpacing: 1,
            fontSize: styles.fontSize.L,
        },
    })

    const fullName = getFullName(user.first_name, user.last_name)

    return (
        <View style={style.header_container}>
            {fullName !== '' && <Text>{fullName}</Text>}
            {application.title !== '' && <Text style={style.header_job_title}>{application.title}</Text>}
        </View>
    )
}

export default Header
