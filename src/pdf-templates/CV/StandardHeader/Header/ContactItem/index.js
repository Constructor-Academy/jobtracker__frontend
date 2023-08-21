/* eslint-disable react/forbid-component-props */
import React, {useContext} from 'react'
import {Text, View} from '@react-pdf/renderer'

import styles from '../styles'
import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'


const ContactItem = ({children, icon}) => {
    const {colors} = useContext(MyContext)

    return (
        <View style={styles.contact_item_container}>
            <View
                style={[styles.contact_item_icon_wrapper, {backgroundColor: colors.accentColor}]}
            >
                <Text style={{color: colors.accentContrastColor}}>
                    {icon}
                </Text>
            </View>
            {children}
        </View>
    )
}

export default ContactItem
