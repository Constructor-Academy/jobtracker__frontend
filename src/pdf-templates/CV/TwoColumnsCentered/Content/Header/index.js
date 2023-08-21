/* eslint-disable react/forbid-component-props */
import React, {useContext} from 'react'
import {View, Text} from '@react-pdf/renderer'

import styles from './styles'
import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'


const Header = ({user}) => {
    const {colors} = useContext(MyContext)

    return (
        <View style={[styles.header_container, {borderBottomColor: colors.mainColor}]}>
            <Text style={styles.header_name}>
                {user.first_name} {user.last_name}
            </Text>
            {user.user_description !== '' && (
                <Text style={styles.header_description}>
                    {user.user_description}
                </Text>
            )}
        </View>
    )
}

export default Header
