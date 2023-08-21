/* eslint-disable react/forbid-component-props */
import {Page, StyleSheet, Font} from '@react-pdf/renderer'
import React from 'react'

import robotoMedium from '../../../assets/fonts/Roboto/Roboto-Medium.ttf'
import robotoBold from '../../../assets/fonts/Roboto/Roboto-Medium.ttf'
import roboto from '../../../assets/fonts/Roboto/Roboto-Regular.ttf'
import ApplicationText from './ApplicationText'
import Footer from './Footer'
import Header from './Header'
import RecipientAddress from './RecipientAddress'
import styles from './styles'


const Elegant = ({user, application, job, contact, company, fontColor}) => {
    const userIsEmpty = !Object.values(user).some(
        (x) => x !== null && x !== '' && x !== 'undefined'
    )
    const applicationIsEmpty = !Object.values(application).some(
        (x) => x !== null && x !== '' && x !== 'undefined'
    )
    const contactIsEmpty = !Object.values(contact).some(
        (x) => x !== null && x !== '' && x !== 'undefined'
    )
    const companyIsEmpty = !Object.values(company).some(
        (x) => x !== null && x !== '' && x !== 'undefined'
    )

    Font.register({
        family: 'Roboto',
        fonts: [
            {
                src: roboto,
                fontWeight: 'normal',
            },
            {
                src: robotoMedium,
                fontWeight: 'medium',
            },
            {
                src: robotoBold,
                fontWeight: 'bold',
            },
        ],
    })

    const style = StyleSheet.create({
        page: {
            backgroundColor: 'white',
            color: fontColor,
            fontSize: styles.fontSize.M,
            fontFamily: 'Roboto',
            textAlign: 'left',
            lineHeight: 1.4,
            paddingTop: styles.space.XXL,
            paddingBottom: styles.space.XXXL,
            paddingHorizontal: styles.space.XXL,
        },
        stripes_top: {
            position: 'absolute',
            left: -20,
            top: -130,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
        },
        stripes_bottom: {
            position: 'absolute',
            right: 20,
            bottom: 160,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            transform: 'rotate(-180deg)',
        },
    })

    return (
        <Page size="A4" style={style.page}>
            <Header application={application} fontColor={fontColor} />

            {!contactIsEmpty && !companyIsEmpty && <RecipientAddress job={job} />}

            {!applicationIsEmpty && <ApplicationText application={application} />}

            {!userIsEmpty && <Footer user={user} />}
        </Page>
    )
}

export default Elegant
