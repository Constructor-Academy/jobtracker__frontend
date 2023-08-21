/* eslint-disable react/forbid-component-props */
import {Text, View} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import styles from './styles'


const ContentBlock = ({children, title, isLastCategory}) => {
    const {colors} = useContext(MyContext)

    return (
        <View style={[styles.page_content_block, isLastCategory ? {marginBottom: 0} : {}]}>
            <Text style={[styles.page_content_block_title, {color: colors.fontColor}]}>
                {title}
            </Text>
            {children}
        </View>
    )
}

export default ContentBlock
