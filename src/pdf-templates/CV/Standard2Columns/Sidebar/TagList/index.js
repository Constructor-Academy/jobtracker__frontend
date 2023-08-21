/* eslint-disable react/forbid-component-props */
import {View, Text} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'
import {v1 as uuidv1} from 'uuid'

import {getI18nLangLevelName} from '../../../../../helpers/i18n'
import {MyContext} from '../../../../../pages/Profile/OverlayCurriculum/context'
import Headline from '../Headline'
import styles from './styles'


const TagList = ({list, showLevel, title, icon}) => {
    const {t} = useTranslation()
    const {colors} = useContext(MyContext)

    return (
        <View style={styles.page_left_content_block} wrap={false}>
            <Headline icon={icon} title={title} />

            <View style={styles.taglist_container}>
                {
                    list.map((item) => (
                        <Text key={uuidv1()} style={[styles.taglist_item, {backgroundColor: colors.accentColor,color: colors.accentContrastColor}]}>
                            {showLevel ? `${item.tag} (${getI18nLangLevelName(item.level, t)})` : item.tag}
                        </Text>
                    ))
                }
            </View>
        </View>
    )
}

export default TagList
