import React, {useContext} from 'react'
import {useTranslation} from 'react-i18next'

import {FormFieldWrapperDefault} from '../../../../style/forms'
import {OverlayContent, OverlaySubtitle} from '../../../../style/overlay'
import {InputTitle} from '../../../../style/titles'
import {CheckboxLabelWrapperProfile} from '../../../../style/wrappers'
import {MyContext} from '../context'



const SettingsContent = () => {
    const {t} = useTranslation()
    const {content, setContent} = useContext(MyContext)

    const handleChange = e => {
        const newContent = {...content}
        newContent[e.target.name] = e.target.checked
        setContent(newContent)
    }

    const handleCategoryChange = e => {
        const newContent = {...content}
        const index = newContent.categories.findIndex(el => el.name === e.target.name)
        const newCategory = newContent.categories[index]
        newCategory['selected'] = e.target.checked
        setContent(newContent)
    }

    return (
        <OverlayContent>
            <OverlaySubtitle>{t('profile:cv_gen.content.to_include')}:</OverlaySubtitle>
            <FormFieldWrapperDefault>
                <InputTitle marginBottom>{t('profile:cv_gen.content.personal_info')}</InputTitle>
                <CheckboxLabelWrapperProfile>
                    <input
                        defaultChecked={content.photo}
                        name="photo"
                        onChange={handleChange}
                        type="checkbox"
                        value={content.photo}
                    />
                    <p>{t('profile:cv_gen.content.photo')}</p>
                </CheckboxLabelWrapperProfile>
                <CheckboxLabelWrapperProfile>
                    <input
                        defaultChecked={content.dob}
                        name="dob"
                        onChange={handleChange}
                        type="checkbox"
                        value={content.dob}
                    />
                    <p>{t('profile:cv_gen.content.dob')}</p>
                </CheckboxLabelWrapperProfile>
                <CheckboxLabelWrapperProfile>
                    <input
                        defaultChecked={content.nationality}
                        name="nationality"
                        onChange={handleChange}
                        type="checkbox"
                        value={content.nationality}
                    />
                    <p>{t('profile:cv_gen.content.nationality')}</p>
                </CheckboxLabelWrapperProfile>
                <CheckboxLabelWrapperProfile>
                    <input
                        defaultChecked={content.permit}
                        name="permit"
                        onChange={handleChange}
                        type="checkbox"
                        value={content.permit}
                    />
                    <p>{t('profile:cv_gen.content.permit_if')}</p>
                </CheckboxLabelWrapperProfile>
            </FormFieldWrapperDefault>
            <FormFieldWrapperDefault>
                <InputTitle marginBottom>{t('profile:cv_gen.content.skill_info')}</InputTitle>
                <CheckboxLabelWrapperProfile>
                    <input
                        defaultChecked={content.skills}
                        name="skills"
                        onChange={handleChange}
                        type="checkbox"
                        value={content.skills}
                    />
                    <p>{t('profile:sections.skills')}</p>
                </CheckboxLabelWrapperProfile>
                <CheckboxLabelWrapperProfile>
                    <input
                        defaultChecked={content.languages}
                        name="languages"
                        onChange={handleChange}
                        type="checkbox"
                        value={content.languages}
                    />
                    <p>{t('profile:sections.languages')}</p>
                </CheckboxLabelWrapperProfile>
                {
                    content.categories && (
                        content.categories.map(category => {
                            return (
                                <CheckboxLabelWrapperProfile key={category.id}>
                                    <input
                                        defaultChecked={category.selected}
                                        name={category.name}
                                        onChange={handleCategoryChange}
                                        type="checkbox"
                                        value={category.selected}
                                    />
                                    <p>{category.name}</p>
                                </CheckboxLabelWrapperProfile>
                            )
                        })
                    )
                }
            </FormFieldWrapperDefault>
        </OverlayContent>
    )
}

export default SettingsContent
