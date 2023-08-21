/* eslint-disable react/forbid-component-props */
import {StyleSheet, View} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'

const styles = StyleSheet.create({
    container: {
        height: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    left_container: {
        position: 'absolute',
        height: 21,
        width: '40%',
    },
    right_container: {
        position: 'absolute',
        height: 21,
        width: '60%',
    }
})

// This component is used for top paddings on 2 layouts which use the entire screen. For example a sidebar background
// color needs to cover the whole document. Adding padding to the page would break that layout.
// This component is basically a fixed header which will be rendered on all pages.
// Don't use this component as footer for bottom spacing - use minPresenceAhead prop instead
const TopPaddingFixComponent = () => {
    const {colors} = useContext(MyContext)

    return (
        <View fixed style={styles.container}>
            <View style={[styles.left_container, {backgroundColor: colors.mainColor}]} />
            <View style={styles.right_container} />
        </View>
    )
}

export default TopPaddingFixComponent
