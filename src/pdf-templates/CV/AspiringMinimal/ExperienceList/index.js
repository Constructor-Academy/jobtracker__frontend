/* eslint-disable react/forbid-component-props */
import {Link, Text, View} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {v1 as uuidv1} from 'uuid'

import {convertToMonthAndDate, decodeDescription} from '../../../../helpers'
import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import ContentBlock from '../ContentBlock'
import styles from './styles'


const ExperienceList = ({list, showDescription, title, isLastCategory}) => {
    const {colors} = useContext(MyContext)

    const lastIndex = list.length - 1

    return (
        <ContentBlock isLastCategory={isLastCategory} title={title}>
            {
                list.map((item, i) => (
                    <View
                        key={uuidv1()}
                        style={lastIndex === i ? {} : styles.experience_card}
                        wrap={false}
                    >
                        {
                            Boolean((item.education_title || item.job_title))  && (
                                <Link style={styles.experience_card_title}>
                                    {item.education_title || item.job_title}
                                </Link>
                            )
                        }

                        {
                            Boolean((item.institute || item.employer)) && (
                                <Link
                                    href={item.webpage ? item.webpage : ''}
                                    style={styles.experience_card_institution}
                                >
                                    {item.institute || item.employer}
                                </Link>
                            )
                        }

                        {
                            Boolean((item.city || item.country)) && (
                                <Text style={styles.experience_card_location}>
                                    {item.city}, {item.country}
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
                            showDescription && Boolean(item.description) && (
                                <View style={styles.experience_card_description}>
                                    {
                                        decodeDescription(item.description).map((el) => {
                                            if(el.charAt(0) === '•'){
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
                    </View>
                ))
            }
        </ContentBlock>
    )
}

export default ExperienceList
