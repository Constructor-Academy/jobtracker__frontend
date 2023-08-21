import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import Select from 'react-select'
import {v1 as uuidv1} from 'uuid'

import {getI18nSkillLevel, getI18nSkillLevels} from '../../../../helpers/i18n'
import {BaseButtonGrey} from '../../../../style/buttons'
import {
    SkillTag,
    TagRemoveButton,
    TagsContainer,
    FormAddTag,
} from '../../../../style/component-based/skills'
import {FormFieldWrapperDefault} from '../../../../style/forms'
import {BaseInputStyled} from '../../../../style/inputs'


const ProfileSkills = ({user, tags, setTags, showEdit}) => {
    const {t} = useTranslation()
    const levels = getI18nSkillLevels(t)
    const [value, setValue] = useState('')
    const [level, setLevel] = useState(levels[0].value)

    const removeTag = (i) => {
        let newTags = [...tags]
        newTags.splice(i, 1)
        setTags(newTags)
    }

    const addTag = (e) => {
        e.preventDefault()
        if (
            !tags.find(
                (tag) => tag['tag'].toLowerCase() === value.toLowerCase()
            )
        ) {
            setTags([...tags, {tag: value.trim(), level: level}])
            e.target.reset()
        } else {
            alert(t('profile:header.errors.skill_exists'))
        }
    }

    if (!showEdit) {
        return (
            user.skills.length > 0 ? (
                <>
                    {
                        user.skills.map((skill) => (
                            <SkillTag key={uuidv1()}>{skill.tag}</SkillTag>
                        ))
                    }
                </>
            ) : (
                <>-</>
            )
        )
    } else {
        return (
            <FormFieldWrapperDefault>
                <FormAddTag onSubmit={addTag}>
                    <Select
                        defaultValue={levels[0]}
                        onChange={(e) => setLevel(e.value)}
                        options={levels}
                    />
                    <BaseInputStyled
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={t('profile:header.skills.placeholder')}
                        type="text"
                    />
                    <BaseButtonGrey>{t('profile:header.skills.add')}</BaseButtonGrey>
                </FormAddTag>
                <TagsContainer>
                    {
                        tags.map((tag, i) => (
                            <SkillTag key={uuidv1()}>
                                {tag.tag} ({getI18nSkillLevel(tag.level, t)})
                                <TagRemoveButton
                                    onClick={
                                        () => {
                                            removeTag(i)
                                        }
                                    }
                                >
                                    ×
                                </TagRemoveButton>
                            </SkillTag>
                        ))
                    }
                </TagsContainer>
            </FormFieldWrapperDefault>
        )
    }
}

export default ProfileSkills
