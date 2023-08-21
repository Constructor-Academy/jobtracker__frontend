/* eslint-disable react/forbid-component-props */
import {View, Text, StyleSheet} from '@react-pdf/renderer'
import React from 'react'

import BulletPoint from '../../../SharedComponents/BulletPoint'
import styles from '../../styles'


const ListItem = ({title, content}) => {
    const style = StyleSheet.create({
        page_content_list_item: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: styles.space.XS,
            paddingLeft: styles.space.S,
            paddingRight: styles.space.XXL,
        },
        page_content_list_item_text: {
            display: 'inline-block',
        },
    })

    const formatText = (title, content) => {
        let result = ''
        if (title !== '') result += `${title} `
        result += content
        return result
    }

    return (
        <View style={style.page_content_list_item} wrap={false}>
            <BulletPoint />
            <Text style={style.page_content_list_item_text}>{formatText(title, content)}</Text>
        </View>
    )
}

export default ListItem
