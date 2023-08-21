/* eslint-disable react/forbid-component-props */
import {
    View,
    Text,
    Image,
} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import styles from './styles'


const AvatarAndSummary = ({user}) => {
    const {content} = useContext(MyContext)

    return (
        <View style={styles.image_and_summary}>
            {
                Boolean(user.avatar) && content.photo && (
                    <View style={styles.page_left_image_wrapper}>
                        <Image src={user.avatar} style={styles.page_left_image} />
                    </View>
                )
            }
            <Text style={styles.page_left_summary_name}>
                {user.first_name} {user.last_name}
            </Text>
            {
                user.user_description !== '' && (
                    <Text style={styles.page_left_summary_description}>
                        {user.user_description}
                    </Text>
                )
            }
        </View>
    )
}

export default AvatarAndSummary
