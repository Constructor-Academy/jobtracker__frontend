/* eslint-disable react/forbid-component-props */
import React, {useContext} from 'react'
import {View, Image} from '@react-pdf/renderer'

import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import styles from './styles'


const Avatar = ({user}) => {
    const {content} = useContext(MyContext)

    return (
        <View style={styles.image_and_summary}>
            {Boolean(user.avatar) && content.photo && (
                <View style={styles.page_left_image_wrapper}>
                    <Image src={user.avatar} style={styles.page_left_image} />
                </View>
            )}
        </View>
    )
}

export default Avatar
