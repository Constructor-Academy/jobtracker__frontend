/* eslint-disable react/forbid-component-props */
import {View, Text, Image} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import styles from './styles'


const Header = ({user}) => {
    const {colors, content} = useContext(MyContext)

    return (
        <View style={[styles.header_container, {backgroundColor: colors.mainColor, color: colors.contrastColor}]}>
            <View style={styles.header_summary}>
                <Text style={styles.header_summary_name}>
                    {user.first_name.toUpperCase()} {user.last_name.toUpperCase()}
                </Text>

                {
                    user.actual_position !== '' && (
                        <Text style={styles.header_summary_actualPosition}>
                            {user.actual_position}
                        </Text>
                    )
                }

                {
                    user.user_description !== '' && (
                        <Text style={styles.header_summary_description}>
                            {user.user_description}
                        </Text>
                    )
                }
            </View>

            {
                Boolean(user.avatar) && content.photo && (
                    <Image src={user.avatar} style={[styles.header_image, {backgroundColor: colors.mainColor}]} />
                )
            }
        </View>
    )
}

export default Header
