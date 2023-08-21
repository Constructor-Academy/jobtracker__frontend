/* eslint-disable react/forbid-component-props */
import {View, Text, Link} from '@react-pdf/renderer'
import React, {useContext} from 'react'

import {convertToMonthAndDate} from '../../../../../helpers'
import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import {getInstituteAndLocation} from '../../../helpers'
import Headline from '../Headline'
import styles from './styles'


const CustomCategory = ({list, title, icon, isLastCategory}) => {
    const {colors} = useContext(MyContext)

    const lastIndex = list.length - 1

    return (
        <View style={isLastCategory ? {} : styles.page_content_block}>
            <Headline icon={icon} title={title} />

            {
                list.map((item, i) => {
                    const location = getInstituteAndLocation(item.institution, item.city, item.country)

                    return (
                        <View
                            key={item.id}
                            style={[styles.experience_card, i === lastIndex && {marginBottom: 0}]}
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
                                {item.title}
                            </Text>

                            {
                                Boolean(location) && (
                                    <Text style={styles.experience_card_institution}>
                                        {location}
                                    </Text>)
                            }

                            {Boolean(item.description) && <Text>{item.description}</Text>}

                            {/*
                        Link's in React-pdf seem to be broken - the h of https is not ending up in the pdf file and the link end up not being clickable.
                        I added a h in front of the url, which is the one who will 'disappear' and the url ends up being correct in the pdf.
                        */}
                            {
                                Boolean(item.link) && (
                                    <Link
                                        href={item.link}
                                        style={[styles.experience_card_institution, {color: colors.accentColor}]}
                                        target="_blank"
                                    >
                                        {item.link}
                                    </Link>
                                )
                            }
                        </View>)
                }
                )
            }
        </View>
    )
}

export default CustomCategory
