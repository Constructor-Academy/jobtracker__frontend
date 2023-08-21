/* eslint-disable react/forbid-component-props */
import {Text, StyleSheet} from '@react-pdf/renderer'
import React from 'react'

import styles from '../../styles'


const ContentBlock = ({content, customStyle}) => {
    const style = StyleSheet.create({
        page_content_block: {
            marginBottom: styles.space.S,
        },
    })

    return (
        <Text style={{...style.page_content_block, ...customStyle}}>
            {content}
        </Text>
    )
}

export default ContentBlock
