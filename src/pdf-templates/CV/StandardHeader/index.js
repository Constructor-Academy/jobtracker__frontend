/* eslint-disable react/forbid-component-props */
import {Page, View, StyleSheet, Font} from '@react-pdf/renderer'
import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'

import materialIcons from '../../../assets/fonts/Material-Icons/MaterialIcons-Regular.ttf'
import robotoMedium from '../../../assets/fonts/Roboto/Roboto-Medium.ttf'
import robotoBold from '../../../assets/fonts/Roboto/Roboto-Medium.ttf'
import roboto from '../../../assets/fonts/Roboto/Roboto-Regular.ttf'
import {MyContext} from '../../../pages/Profile/OverlayCurriculum/context'
import CustomCategory from './CustomCategory'
import ExperienceList from './ExperienceList'
import Header from './Header'
import PersonalInfo from './PersonalInfo'
import styles from './styles'
import TagList from './TagList'

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: roboto,
            fontWeight: 'normal',
        },
        {
            src: robotoMedium,
            fontWeight: 'medium',
        },
        {
            src: robotoBold,
            fontWeight: 'bold',
        },
    ],
})

// https://material.io/resources/icons/?style=baseline
Font.register({
    family: 'Material',
    fonts: [
        {
            src: materialIcons,
            fontWeight: 'normal',
        },
    ],
})


const StandardHeader = ({user}) => {
    const {t} = useTranslation()
    const {
        colors,
        content,
        showSkillLevel,
        showLanguageLevel,
    } = useContext(MyContext)

    const icons = ['local_activity', 'book', 'casino', 'api']

    const showPersonal =
        (user.date_of_birth !== '' && content.dob !== false) ||
        (user.nationality !== '' && content.nationality !== false) ||
        (user.permit !== '' && content.permit !== false)

    const style = StyleSheet.create({
        page: {
            backgroundColor: 'white',
            color: colors.fontColor,
            fontSize: styles.fontSize.M,
            fontFamily: 'Roboto',
            paddingVertical: styles.space.XL,
        },
        page_content: {
            display: 'flex',
            flexDirection: 'row',
            padding: styles.space.L,
            paddingBottom: 0,
        },
        page_content_left: {
            width: '55%',
            minHeight: '100%',
            paddingRight: styles.space.L,
            borderRight: '1pt solid #EEEEEE',
        },
        page_content_right: {
            width: '45%',
            minHeight: '100%',
            paddingLeft: styles.space.L,
        },
    })

    const selectedCategories = user.categories.filter(cat => cat.selected)
    const hasCategories = Boolean(selectedCategories.length)
    const lastCategoryIndex = selectedCategories.length - 1

    return (
        <Page size="A4" style={style.page}>
            <Header user={user} />

            <View style={style.page_content}>
                <View style={style.page_content_left}>
                    {showPersonal && <PersonalInfo showPersonal={showPersonal} user={user} />}
                    {Boolean(user.experiences.length) && <ExperienceList icon="work" isLastCategory={!hasCategories} list={user.experiences} title={t('profile:cv_gen:content.experience')} />}
                    {
                        hasCategories && selectedCategories.map((category, i) => {
                            return <CustomCategory icon={icons[i] || icons[0]} isLastCategory={i === lastCategoryIndex} key={category.id} list={category.events} title={category.name} />
                        })
                    }
                </View>

                <View style={style.page_content_right}>
                    {Boolean(user.skills.length) && Boolean(content.skills) && <TagList icon="star" list={user.skills} showProficiency={showSkillLevel} title={t('profile:cv_gen:content.skills')} />}
                    {Boolean(user.languages.length) && Boolean(content.languages) && <TagList icon="translate" list={user.languages} showProficiency={showLanguageLevel} title={t('profile:cv_gen:content.languages')} />}
                    {Boolean(user.educations.length) && <ExperienceList icon="school" isLastCategory list={user.educations} title={t('profile:cv_gen:content.education')} />}
                </View>
            </View>
        </Page>
    )
}

export default StandardHeader
