/* eslint-disable react/forbid-component-props */
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer'
import React from 'react'

import ContentBlock from '../../Elegant/ApplicationText/ContentBlock'
import ListItem from '../../Elegant/ApplicationText/ListItem'
import styles from '../styles'


const ApplicationText = ({application}) => {
    const style = StyleSheet.create({
        letter: {
            width: '68%',
            paddingTop: styles.space.L,
            paddingLeft: styles.space.L,
        },
        page_content_block: {
            maxWidth: '100%',
        },
        page_content_block_title: {
            fontWeight: 'bold',
            letterSpacing: 0.5,
            paddingBottom: styles.space.XS,
        },
        page_content_list: {
            marginTop: styles.space.S,
            marginBottom: styles.space.S,
        },
        page_content_signature_wrapper: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: styles.space.L,
            height: 50,
            width: 300,
        },
        page_content_signature: {
            objectFit: 'contain',
            objectPosition: 'left center',
        },
    })

    return (
        <View style={style.letter}>
            <View style={style.page_content_block}>
                {application.salutation !== '' && <Text style={style.page_content_block_title}>{application.salutation}</Text>}

                {application.impressed !== '' && <ContentBlock content={application.impressed} />}

                <View style={style.page_content_list}>
                    {application.intro_text_list !== '' && <ContentBlock content={application.intro_text_list} />}

                    {
                        (application.skills_title !== '' || application.skills_content !== '' || application.main_education !== '') &&
                        <ListItem content={`${application.skills_content} ${application.main_education}`} title={application.skills_title} />
                    }

                    {
                        (application.experiences_sector_title !== '' || application.experiences_sector_content !== '') &&
                        <ListItem content={application.experiences_sector_content} title={application.experiences_sector_title} />
                    }

                    {
                        (application.experiences_personal_title !== '' || application.experiences_personal_content !== '') &&
                        <ListItem content={application.experiences_personal_content} title={application.experiences_personal_title} />
                    }
                </View>

                {application.greeting !== '' && <ContentBlock content={application.greeting} />}

                <View style={style.page_content_signature_wrapper}>
                    {application.signatureURL !== '' && <Image src={application.signatureURL} style={style.page_content_signature} />}
                </View>
            </View>
        </View>
    )
}

export default ApplicationText
