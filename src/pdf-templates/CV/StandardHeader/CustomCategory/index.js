/* eslint-disable react/forbid-component-props */
import {
    View,
    Text,
    Link,
} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {v1 as uuidv1} from 'uuid'

import {
    convertToMonthAndDate,
    decodeDescription,
} from '../../../../helpers'
import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import {getInstituteAndLocation} from '../../helpers'
import Headline from '../Headline'
import styles from './styles'


const CustomCategory = ({icon, title, list, isLastCategory}) => {
    const {colors} = useContext(MyContext)

    const lastIndex = list.length - 1

    return (
        <View style={isLastCategory ? {} : styles.page_content_block}>
            <View style={styles.page_content_block_title_wrapper}>
                <Headline icon={icon} />
                <Text style={[styles.page_content_block_title, {color: colors.mainColor}]}>
                    {title}
                </Text>
            </View>

            {
                list.map((item, i) => {
                    const location = getInstituteAndLocation(item.institution, item.city, item.country)

                    return (
                        <View
                            key={item.id}
                            style={[styles.experience_card, i === lastIndex && {paddingBottom: 0}]}
                            wrap={false}
                        >
                            {
                                Boolean(item.start_date) && (
                                    <Text style={styles.experience_card_date}>
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

                            {
                                Boolean(item.description) && (
                                    <View>
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
                        </View>
                    )
                })
            }
        </View>
    )
}

export default CustomCategory
