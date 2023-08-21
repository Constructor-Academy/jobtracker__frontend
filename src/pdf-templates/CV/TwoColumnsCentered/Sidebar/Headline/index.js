/* eslint-disable react/forbid-component-props */
import React, {useContext} from 'react'
import {View, Text} from '@react-pdf/renderer'

import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import styles from './styles'

const Headline = ({title}) => {
    const {colors} = useContext(MyContext)

    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: colors.accentContrastColor}]}>
                {title}
            </Text>
        </View>
    )
}

export default Headline
