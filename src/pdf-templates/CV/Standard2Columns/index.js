/* eslint-disable react/forbid-component-props */
import {Page, StyleSheet, Font, View} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import fontello from '../../../assets/fonts/Fontello/fontello.ttf'
import robotoMedium from '../../../assets/fonts/Roboto/Roboto-Medium.ttf'
import robotoBold from '../../../assets/fonts/Roboto/Roboto-Medium.ttf'
import roboto from '../../../assets/fonts/Roboto/Roboto-Regular.ttf'
import {MyContext} from '../../../pages/Profile/OverlayCurriculum/context'
import Content from './Content'
import Sidebar from './Sidebar'
import TopPaddingFixComponent from './TopPaddingFixComponent'

// FONTS
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
Font.register({
    family: 'fontello',
    fonts: [
        {
            src: fontello,
            fontWeight: 'regular',
        },
    ],
})


const Standard2Columns = ({user}) => {
    const {colors} = useContext(MyContext)

    const style = StyleSheet.create({
        page: {
            display: 'flex',
            color: colors.fontColor,
            fontSize: 11,
            fontFamily: 'Roboto',
        },
        content_container: {
            display: 'flex',
            flexDirection: 'row',
        }
    })

    return (
        <Page size="A4" style={style.page}>
            <TopPaddingFixComponent />

            <View style={style.content_container}>
                <Sidebar user={user} />

                <Content user={user} />
            </View>
        </Page>
    )
}

export default Standard2Columns
