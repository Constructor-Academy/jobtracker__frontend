/* eslint-disable react/forbid-component-props */
import {Page, StyleSheet, Font, View} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import poppinsMedium from '../../../assets/fonts/Poppins/Poppins-Medium.ttf'
import poppinsRegular from '../../../assets/fonts/Poppins/Poppins-Regular.ttf'
import {MyContext} from '../../../pages/Profile/OverlayCurriculum/context'
import ColumnLeft from './ColumnLeft'
import ColumnRight from './ColumnRight'
import Header from './Header'
import styles from './styles'


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

const AspiringMinimal = ({user}) => {
    const {colors} = useContext(MyContext)

    const style = StyleSheet.create({
        page: {
            backgroundColor: 'white',
            color: colors.fontColor,
            fontSize: styles.fontSize.M,
            fontFamily: 'Poppins',
            paddingVertical: styles.space.L,
        },
        page_content: {
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: styles.space.XL,
        },
    })

    return (
        <Page size="A4" style={style.page}>
            <Header user={user} />
            <View style={style.page_content}>
                <ColumnLeft user={user} />
                <ColumnRight user={user} />
            </View>
        </Page>
    )
}

export default AspiringMinimal
