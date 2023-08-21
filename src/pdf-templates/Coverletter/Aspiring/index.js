/* eslint-disable react/forbid-component-props */
import {Page, View, StyleSheet, Font} from '@react-pdf/renderer'
import React from 'react'

import materialIcons from '../../../assets/fonts/Material-Icons/MaterialIcons-Regular.ttf'
import poppinsMedium from '../../../assets/fonts/Poppins/Poppins-Medium.ttf'
import poppinsRegular from '../../../assets/fonts/Poppins/Poppins-Regular.ttf'
import ApplicationText from './ApplicationText'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './styles'


const Aspiring = ({user, application, job, fontColor, mainColor}) => {
    Font.register({
        family: 'Poppins',
        fonts: [
            {
                src: poppinsRegular,
                fontWeight: 'normal',
            },
            {
                src: poppinsMedium,
                fontWeight: 'bold',
            },
        ],
    })
    Font.register({
        family: 'Material',
        fonts: [
            {
                src: materialIcons,
                fontWeight: 'normal',
            },
        ],
    })

    const style = StyleSheet.create({
        page: {
            backgroundColor: 'white',
            color: fontColor,
            fontSize: styles.fontSize.M,
            fontFamily: 'Poppins',
            padding: styles.space.XL,
        },
        content: {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            fontWeight: 'normal',
        },
    })

    return (
        <Page size="A4" style={style.page}>
            <Header application={application} mainColor={mainColor} user={user} />

            <View style={style.content}>
                <Sidebar job={job} mainColor={mainColor} user={user} />
                <ApplicationText application={application} />
            </View>
        </Page>
    )
}

export default Aspiring
