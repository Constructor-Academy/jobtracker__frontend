/* eslint-disable react/forbid-component-props */
import {View} from '@react-pdf/renderer'
import React from 'react'
import {useTranslation} from 'react-i18next'

import CustomCategory from '../CustomCategory'
import ExperienceList from '../ExperienceList'
import styles from './styles'


const ColumnRight = ({user}) => {
    const {t} = useTranslation()
    const selectedCategories = user.categories.filter(cat => cat.selected)
    const hasCategories = Boolean(selectedCategories.length)
    const lastCategoryIndex = selectedCategories.length - 1

    return (
        <View style={styles.page_content_right}>
            {Boolean(user.experiences.length) && <ExperienceList isLastCategory={!hasCategories} list={user.experiences} showDescription title={t('profile:cv_gen:content.experience')} />}
            {
                hasCategories && selectedCategories.map((category, i) => {
                    return <CustomCategory isLastCategory={i === lastCategoryIndex} key={category.id} list={category.events} title={category.name} />
                })
            }
        </View>
    )
}

export default ColumnRight
