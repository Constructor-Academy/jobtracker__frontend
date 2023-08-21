/* eslint-disable react/forbid-component-props */
import {Text, View} from '@react-pdf/renderer'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {v1 as uuidv1} from 'uuid'

import {getI18nLangLevelName} from '../../../../../helpers/i18n'
import ContentBlock from '../../ContentBlock'
import styles from './styles'


const TagList = ({list, showLevel, title}) => {
    const {t} = useTranslation()

    return (
        <ContentBlock title={title}>
            <View style={styles.taglist_container}>
                {
                    list.map((item) => (
                        <Text
                            key={uuidv1()}
                            style={styles.tag_item}
                        >
                            {showLevel ? `${item.tag} (${getI18nLangLevelName(item.level, t)})` : item.tag}
                        </Text>
                    ))
                }
            </View>
        </ContentBlock>
    )
}

export default TagList
