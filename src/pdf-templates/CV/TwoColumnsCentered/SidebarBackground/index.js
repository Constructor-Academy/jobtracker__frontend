/* eslint-disable react/forbid-component-props */
import React, {useContext} from 'react'
import {View} from '@react-pdf/renderer'

import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'

import styles from '../Sidebar/styles'


const SidebarBackground = () => {
    const {colors} = useContext(MyContext)

    return <View fixed style={[styles.sidebar_container, {backgroundColor: colors.mainColor}]} />
}

export default SidebarBackground
