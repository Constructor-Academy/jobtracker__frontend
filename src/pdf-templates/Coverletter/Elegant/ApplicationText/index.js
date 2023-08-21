/* eslint-disable react/forbid-component-props */
import {View, Image, StyleSheet} from '@react-pdf/renderer'
import React from 'react'

import styles from '../styles'
import ContentBlock from './ContentBlock'
import ListItem from './ListItem'

const ApplicationText = ({application}) => {
    const style = StyleSheet.create({
        page_content: {
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: styles.space.M,
            paddingRight: styles.space.S,
        },
        page_content_block_title: {
            fontWeight: 'bold',
            letterSpacing: 0.5,
            fontSize: styles.fontSize.M,
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
        <View style={style.page_content}>
            <View>

                {application.salutation !== '' && <ContentBlock content={application.salutation} customStyle={style.page_content_block_title} />}

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

                {
                    application.signatureURL !== '' && (
                        <View style={style.page_content_signature_wrapper} wrap={false}>
                            <Image
                                src={application.signatureURL}
                                style={style.page_content_signature}
                            />
                        </View>
                    )
                }
            </View>
        </View>
    )
}

export default ApplicationText
