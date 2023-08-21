/* eslint-disable react/forbid-component-props */
import {View, Text, StyleSheet} from '@react-pdf/renderer'
import React from 'react'

import styles from '../styles'

const Header = ({application, fontColor}) => {
    const style = StyleSheet.create({
        page_header: {
            color: fontColor,
            paddingHorizontal: styles.space.XL,
            paddingBottom: styles.space.XL,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        header_div: {
            width: '80%',
        },
        header_job_title: {
            textTransform: 'uppercase',
            paddingTop: styles.space.XXS,
            fontWeight: 'medium',
            letterSpacing: 1,
            fontSize: styles.fontSize.L,
            textAlign: 'center',
        },
        header_bottom_line_wrapper: {
            display: 'flex',
            justifyContent: 'center',
        },
        header_bottom_line: {
            paddingTop: styles.space.S,
            width: '200px',
            borderBottom: '1pt solid #9ca6ad',
        },

        header_subline: {
            fontSize: styles.fontSize.S,
            textAlign: 'center',
        },

        header_company: {
            paddingTop: styles.space.XS,
            fontWeight: 'bold',
            letterSpacing: 0.5,
            fontSize: styles.fontSize.M,
            textTransform: 'uppercase',
            textAlign: 'center',
        },
    })

    return (
        <View style={style.page_header}>
            {
                application.title !== '' && (
                    <View style={style.header_div}>
                        <Text style={style.header_job_title}>{application.title}</Text>
                    </View>
                )
            }
            <View style={style.header_bottom_line_wrapper}>
                <View style={style.header_bottom_line} />
            </View>
        </View>
    )
}

export default Header
