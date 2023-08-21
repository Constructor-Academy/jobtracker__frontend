/* eslint-disable react/forbid-component-props */
import {Page, StyleSheet, Font, View} from '@react-pdf/renderer'
import React, {useContext} from 'react'


import fontello from '../../../assets/fonts/Fontello/fontello.ttf'
import RalewayLight from '../../../assets/fonts/Raleway/Raleway-ExtraLight.ttf'
import Raleway from '../../../assets/fonts/Raleway/Raleway-Regular.ttf'
import {MyContext} from '../../../pages/Profile/OverlayCurriculum/context'
import Content from './Content'
import Sidebar from './Sidebar'
import TopPaddingFixComponent from './TopPaddingFixComponent'


Font.register({
    family: 'Raleway',
    fonts: [
        {
            src: Raleway,
        },
        {
            src: RalewayLight,
            fontWeight: 'light',
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


const TwoColumnsCentered = ({user}) => {
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

export default TwoColumnsCentered
