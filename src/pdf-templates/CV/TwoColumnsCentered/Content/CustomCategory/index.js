/* eslint-disable react/forbid-component-props */
import {View, Text, Link} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import {convertToMonthAndDate} from '../../../../../helpers'
import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import {getInstituteAndLocation} from '../../../helpers'
import Headline from '../Headline'
import styles from './styles'


const ExperienceList = ({list, title, icon, isLastCategory}) => {
    const {colors} = useContext(MyContext)

    return (
        <View style={!isLastCategory && styles.page_content_block}>
            <Headline icon={icon} title={title} />

            {
                list.map((item) => {
                    const location = getInstituteAndLocation(item.city, item.country, item.institution)

                    return (
                        <View
                            key={item.id}
                            style={styles.experience_card}
                            wrap={false}
                        >
                            {
                                Boolean(item.start_date) && (
                                    <Text style={[styles.experience_card_date, {color: colors.accentColor}]}>
                                        {convertToMonthAndDate(item.start_date)} - {convertToMonthAndDate(item.end_date)}
                                    </Text>
                                )
                            }

                            {
                                Boolean(item.title) && (
                                    <Text style={styles.experience_card_title}>
                                        {item.title}
                                    </Text>
                                )
                            }

                            {
                                Boolean(location) && (
                                    <Link
                                        style={[styles.experience_card_institution, {color: colors.accentColor}]}
                                        target="_blank"
                                    >
                                        {location}
                                    </Link>
                                )
                            }

                            {Boolean(item.description) && <Text>{item.description}</Text>}

                            {
                                Boolean(item.link) && (
                                    <Link
                                        href={item.link}
                                        style={styles.experience_card_institution}
                                        target="_blank"
                                    >
                                        {item.link}
                                    </Link>
                                )
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}

export default ExperienceList
