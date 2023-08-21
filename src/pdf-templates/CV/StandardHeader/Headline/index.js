/* eslint-disable react/forbid-component-props */
import {Text, View} from '@react-pdf/renderer'
import {StyleSheet} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import styles from '../styles'

const style = StyleSheet.create({
    page_content_block_icon: {
        fontFamily: 'Material',
        fontSize: styles.fontSize.S,
    },
    page_content_block_icon_wrapper: {
        height: 18,
        width: 18,
        borderRadius: 18,
        // backgroundColor: colors.mainColor,
        marginRight: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})


const IconContent = ({icon}) => {
    const {colors} = useContext(MyContext)

    return (
        <View style={[style.page_content_block_icon_wrapper, {backgroundColor: colors.mainColor}]}>
            <Text style={[style.page_content_block_icon, {color: colors.contrastColor}]}>
                {icon}
            </Text>
        </View>
    )
}

export default IconContent
