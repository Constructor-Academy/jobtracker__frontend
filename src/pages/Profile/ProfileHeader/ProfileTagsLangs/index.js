import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import Select from 'react-select'
import {v1 as uuidv1} from 'uuid'

import {getI18nLangLevel, getI18nLangLevels} from '../../../../helpers/i18n'
import {BaseButtonGrey} from '../../../../style/buttons'
import {
    TagRemoveButton,
    TagsContainer,
    FormAddTag,
    LangTag,
} from '../../../../style/component-based/skills'
import {FormFieldWrapperDefault} from '../../../../style/forms'
import {BaseInputStyled} from '../../../../style/inputs'


const ProfileLangs = ({user, tags, setTags, showEdit}) => {
    const {t} = useTranslation()
    const levels = getI18nLangLevels(t)
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
            alert(t('profile:header.errors.language_exists'))
        }
    }

    if (!showEdit) {
        return (
            user.languages.length > 0 ? (
                <>
                    {
                        user.languages.map((skill) => (
                            <LangTag key={uuidv1()}>{skill.tag}</LangTag>
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
                        placeholder={t('profile:header.languages.placeholder')}
                        type="text"
                    />
                    <BaseButtonGrey>{t('profile:header.languages.add')}</BaseButtonGrey>
                </FormAddTag>
                <TagsContainer>
                    {
                        tags.map((tag, i) => (
                            <LangTag key={uuidv1()}>
                                {tag.tag} ({getI18nLangLevel(tag.level, t)})
                                <TagRemoveButton
                                    onClick={
                                        () => {
                                            removeTag(i)
                                        }
                                    }
                                >
                                    ×
                                </TagRemoveButton>
                            </LangTag>
                        ))
                    }
                </TagsContainer>
            </FormFieldWrapperDefault>
        )
    }
}
export default ProfileLangs
