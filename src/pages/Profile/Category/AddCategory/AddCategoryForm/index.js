import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'

import ButtonSpinner from '../../../../../components/ButtonSpinner'
import {createCategoryAction} from '../../../../../store/actions/categoryAction'
import {BaseButton, BaseButtonInverted} from '../../../../../style/buttons'
import {
    ExperienceContainer,
    ExperienceTitleWrapperNew,
    ExperienceButtonBar,
    ExperienceTitle,
} from '../../../../../style/component-based/profile_experience'
import {FormFieldWrapperDefault} from '../../../../../style/forms'
import {BaseInputStyled} from '../../../../../style/inputs'
import {InputTitle} from '../../../../../style/titles'


const AddCategoryForm = ({addToggle}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [addLoader, setAddLoader] = useState(false)

    const AddHandler = async (e) => {
        e.preventDefault()
        setAddLoader(true)
        await dispatch(createCategoryAction(name))
    }

    return (
        <ExperienceContainer noBorder>
            <form onSubmit={AddHandler}>
                <ExperienceTitleWrapperNew>
                    <ExperienceTitle>{t('profile:category.title')}</ExperienceTitle>
                </ExperienceTitleWrapperNew>
                <FormFieldWrapperDefault>
                    <InputTitle>{t('profile:category.name')}</InputTitle>
                    <BaseInputStyled
                        maxLength="50"
                        onChange={e => setName(e.target.value)}
                        placeholder={t('profile:category.placeholder')}
                        required
                        type="text"
                    />
                </FormFieldWrapperDefault>
                <ExperienceButtonBar>
                    <BaseButtonInverted onClick={addToggle} type="button">
                        {t('common:cancel')}
                    </BaseButtonInverted>
                    <BaseButton type="submit">
                        {addLoader ? <ButtonSpinner /> : t('common:add')}
                    </BaseButton>
                </ExperienceButtonBar>
            </form>
        </ExperienceContainer>
    )
}

export default AddCategoryForm
