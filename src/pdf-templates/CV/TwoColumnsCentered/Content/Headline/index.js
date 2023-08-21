/* eslint-disable react/forbid-component-props */
import {View, Text} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import styles from './styles'


const Headline = ({icon, title}) => {
    const {colors} = useContext(MyContext)

    return (
        <View style={styles.headline_container}>
            <Text style={[styles.headline_icon, {color: colors.mainColor}]}>{icon}</Text>
            <Text style={[styles.headline_title, {color: colors.mainColor}]}>
                {title}
            </Text>
        </View>
    )
}

export default Headline
