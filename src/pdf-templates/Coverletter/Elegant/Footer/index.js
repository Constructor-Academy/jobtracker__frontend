/* eslint-disable react/forbid-component-props */
import {View, Text, StyleSheet} from '@react-pdf/renderer'
import React from 'react'

import BulletPoint from '../../SharedComponents/BulletPoint'
import styles from '../styles'


const Footer = ({user}) => {
    const fullName = `${user.first_name} ${user.last_name}`
    const getUserAddress = () => {
        const {street, zip, city, country} = user
        let result = ''
        if(street !== ''){
            result += street
        }
        if(zip !== ''){
            if(result !== '') result += ', '
            result += zip
        }
        if(city !== ''){
            if(result !== '') result += ' '
            result += city
        }
        if((country !== '' || country !== 'Switzerland')){
            if(result !== '') result += ' - '
            result += country
        }
        return result
    }
    const userAddress = getUserAddress()
    const {email, phone} = user

    const style = StyleSheet.create({
        page_footer_adress: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: styles.space.XS,
            fontSize: styles.fontSize.S,
            position: 'absolute',
            bottom: styles.space.L,
            marginLeft: styles.space.XXL,
        },
    })

    return (
        <View fixed style={style.page_footer_adress}>
            {fullName !== '' && <Text>{fullName}&nbsp;</Text>}
            {fullName !== '' && (userAddress !== '' || phone !== '' || email !== '') && <BulletPoint />}
            {userAddress !== '' && <Text>{userAddress}&nbsp;</Text>}
            {userAddress !== '' && (phone !== '' || email !== '') && <BulletPoint />}
            {phone !== '' && (<Text>{phone}&nbsp;</Text>)}
            {phone !== '' && email !== '' && <BulletPoint />}
            {email !== '' && <Text>{email}</Text>}
        </View>
    )
}

export default Footer
