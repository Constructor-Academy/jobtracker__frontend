/* eslint-disable react/forbid-component-props */
import {View, Text} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'
import {v1 as uuidv1} from 'uuid'

import {getI18nLangLevelName} from '../../../../helpers/i18n'
import {MyContext} from '../../../../pages/Profile/OverlayCurriculum/context'
import Headline from '../Headline'
import styles from './styles'


const TagList = ({icon, list, title, showProficiency}) => {
    const {t} = useTranslation()
    const {colors} = useContext(MyContext)

    return (
        <View style={styles.page_content_block}>
            <View style={styles.page_content_block_title_wrapper}>
                <Headline icon={icon} />
                <Text style={[styles.page_content_block_title, {color: colors.mainColor}]}>
                    {title}
                </Text>
            </View>

            <View style={styles.tag_wrapper}>
                {
                    list.map((item) => (
                        <Text
                            key={uuidv1()}
                            style={[styles.tag, {backgroundColor: colors.accentColor, color: colors.accentContrastColor,}]}
                        >
                            {
                                showProficiency ?
                                    <>{item.tag} ({getI18nLangLevelName(item.level, t)})</> :
                                    <>{item.tag}</>
                            }
                        </Text>
                    ))
                }
            </View>
        </View>
    )
}

export default TagList
