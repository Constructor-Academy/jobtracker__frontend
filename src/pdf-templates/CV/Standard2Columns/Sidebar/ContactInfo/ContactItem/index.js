/* eslint-disable react/forbid-component-props */
import React, {useContext} from 'react'
import {
    View,
    Text, Font,
} from '@react-pdf/renderer'

import {MyContext} from '../../../../../../pages/Profile/OverlayCurriculum/context'
import styles from './styles'

// setting no hyphenation to not break words like email or urls
Font.registerHyphenationCallback(word => [word]);


const ContactItem = ({children, icon}) => {
    const {colors} = useContext(MyContext)
    return (
        <View style={styles.contact_item_container}>
            <Text style={[styles.contact_item_icon, {color: colors.accentColor}]}>
                {icon}
            </Text>
            {children}
        </View>
    )
}

export default ContactItem
