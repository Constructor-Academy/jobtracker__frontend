/* eslint-disable react/forbid-component-props */
import {View,Text} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import styles from './styles'

const Headline = ({icon, title}) => {
    const {colors} = useContext(MyContext)

    return (
        <View style={styles.container}>
            <Text style={[styles.icon, {color: colors.contrastColor}]}>
                {icon}
            </Text>
            <Text style={[styles.title, {color: colors.contrastColor}]}>
                {title}
            </Text>
        </View>
    )
}

export default Headline
