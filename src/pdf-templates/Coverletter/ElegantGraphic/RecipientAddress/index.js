/* eslint-disable react/forbid-component-props */
import {View, Text, StyleSheet} from '@react-pdf/renderer'
import React from 'react'
import {useTranslation} from 'react-i18next'

import styles from '../styles'


const RecipientAddress = ({job}) => {
    const {t} = useTranslation()
    const style = StyleSheet.create({
        header_address_to: {
            marginTop: styles.space.XXS,
            fontSize: styles.fontSize.S,
            paddingLeft: styles.space.M,
            paddingRight: styles.space.S,
            marginBottom: styles.space.L,
        },
        header_address_to_content_block: {},
        header_address_to_header: {
            marginBottom: styles.space.XS,
            fontWeight: 'bold',
        },
        header_address_to_content_item: {},
    })

    return (
        <View style={style.header_address_to}>
            <View style={style.header_address_to_content_block}>
                <Text style={style.header_address_to_header}>{t('profile:letter_gen.coverletter.template.to')}:</Text>
                {
                    job.contact !== '' && (
                        <Text style={style.header_address_to_content_item}>
                            {job.contact}
                        </Text>
                    )
                }

                {
                    job.company !== '' && (
                        <Text style={style.header_address_to_content_item}>
                            {job.company}
                        </Text>
                    )
                }

                {
                    job.company_street !== '' && (
                        <Text style={style.header_address_to_content_item}>
                            {job.company_street}
                        </Text>
                    )
                }

                {
                    job.company_zip !== '' && job.company_city && (
                        <Text style={style.header_address_to_content_item}>
                            {job.company_zip} {job.company_city}
                        </Text>
                    )
                }

                {
                    job.company_country !== '' && (
                        <Text style={style.header_address_to_content_item}>
                            {job.company_country}
                        </Text>
                    )
                }
            </View>
        </View>
    )
}

export default RecipientAddress
