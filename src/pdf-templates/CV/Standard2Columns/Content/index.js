/* eslint-disable react/forbid-component-props */
import {View} from '@react-pdf/renderer'
import React from 'react'
import {useTranslation} from 'react-i18next'

import CustomCategory from './CustomCategory'
import ExperienceList from './ExperienceList'
import styles from './styles'


const Content = ({user}) => {
    const {t} = useTranslation()
    const experienceIcon = '\uf1ad'
    const educationIcon = '\ue800'
    const randomIcons = ['\u2605', '\uf0d0', '\ue70d'] // star, magic stick, labels

    // Last list should not have bottom margin to avoid creation of empty pages
    const hasEducations = Boolean(user.educations.length)
    const selectedCategories = user.categories.filter(category => category.selected)
    const hasCategories = Boolean(selectedCategories.length)
    const lastCategoryIndex = selectedCategories.length - 1

    return (
        <View style={styles.page_right}>
            {Boolean(user.experiences.length) && <ExperienceList icon={experienceIcon} isLastCategory={!hasEducations && !hasCategories} list={user.experiences} title={t('profile:cv_gen:content.experience')} />}
            {hasEducations && <ExperienceList icon={educationIcon} isLastCategory={!hasCategories} list={user.educations} title={t('profile:cv_gen:content.education')} />}
            {
                hasCategories && selectedCategories.map((category, i) => {
                    return <CustomCategory icon={randomIcons[i] || randomIcons[0]} isLastCategory={i === lastCategoryIndex} key={category.id} list={category.events} title={category.name} />
                })
            }
        </View>
    )
}

export default Content
