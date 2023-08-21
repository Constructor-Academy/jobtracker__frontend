/* eslint-disable react/forbid-component-props */
import {View, Text, Link} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import {convertToMonthAndDate} from '../../../../../helpers'
import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import Headline from '../Headline'
import styles from './styles'


const ExperienceList = ({list, title, icon, isLastCategory}) => {
    const {colors} = useContext(MyContext)

    return (
        <View style={isLastCategory ? {} : styles.page_content_block}>
            <Headline icon={icon} title={title} />

            {
                list.map((item) => (
                    <View
                        key={item.id}
                        style={styles.experience_card}
                        wrap={false}
                    >
                        {
                            item.start_date && (
                                <Text style={[styles.experience_card_date, {color: colors.accentColor}]}>
                                    {convertToMonthAndDate(item.start_date)} - {convertToMonthAndDate(item.end_date)}
                                </Text>
                            )
                        }

                        <Text style={styles.experience_card_title}>
                            {item.job_title || item.education_title}
                        </Text>

                        <Link
                            href={item.webpage}
                            style={[styles.experience_card_institution, {color: colors.accentColor}]}
                            target="_blank"
                        >
                            {item.employer || item.institute} ({item.city}, {item.country})
                        </Link>

                        {item.description && <Text>{item.description}</Text>}
                    </View>
                ))
            }
        </View>
    )
}

export default ExperienceList
