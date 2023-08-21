/* eslint-disable react/forbid-component-props */
import {Link, Text, View} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {v1 as uuidv1} from 'uuid'

import {convertToMonthAndDate, decodeDescription} from '../../../../helpers'
import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import {getLocation} from '../../helpers'
import ContentBlock from '../ContentBlock'
import styles from './styles'


const ExperienceList = ({list, title, isLastCategory}) => {
    const {colors} = useContext(MyContext)

    const lastIndex = list.length - 1

    return (
        <ContentBlock isLastCategory={isLastCategory} title={title}>
            {
                list.map((item, i) => {
                    const location = getLocation(item.city, item.country)

                    return (
                        <View
                            key={uuidv1()}
                            style={i === lastIndex ? {} : styles.experience_card}
                            wrap={false}
                        >
                            {
                                Boolean(item.title) && (
                                    <Link style={styles.experience_card_title}>
                                        {item.title}
                                    </Link>
                                )
                            }

                            {
                                Boolean(item.institution) && (
                                    <Link
                                        style={styles.experience_card_institution}
                                    >
                                        {item.institution}
                                    </Link>
                                )
                            }

                            {
                                Boolean(location) && (
                                    <Text style={styles.experience_card_location}>
                                        {location}
                                    </Text>
                                )
                            }

                            {
                                Boolean(item.start_date) && (
                                    <Text style={[styles.experience_card_date, {color: colors.accentColor}]}>
                                        {convertToMonthAndDate(item.start_date)} - {convertToMonthAndDate(item.end_date)}
                                    </Text>
                                )
                            }

                            {
                                Boolean(item.description) && item.description && (
                                    <View style={styles.experience_card_description}>
                                        {
                                            decodeDescription(item.description).map((el) => {
                                                if (el.charAt(0) === '•') {
                                                    return (
                                                        <View key={uuidv1()} style={styles.experience_bullet_wrapper}>
                                                            <Text style={styles.bullet_experience}>
                                                                •{' '}
                                                            </Text>
                                                            <Text style={styles.experience_item}>
                                                                {el.substring(1)}
                                                            </Text>
                                                        </View>
                                                    )
                                                } else {
                                                    return (
                                                        <View key={uuidv1()} style={styles.experience_bullet_wrapper}>
                                                            <Text style={styles.experience_item}>
                                                                {el}
                                                            </Text>
                                                        </View>
                                                    )
                                                }
                                            })
                                        }
                                    </View>
                                )
                            }

                            {
                                Boolean(item.link) && (
                                    <Link href={item.link} style={styles.experience_card_institution} target="_blank">
                                        {item.link}
                                    </Link>
                                )
                            }
                        </View>
                    )
                })
            }
        </ContentBlock>
    )
}

export default ExperienceList
