import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components/macro'

import ButtonSpinner from '../../../../../components/ButtonSpinner'
import DeleteData from '../../../../../components/DeleteData'
import {
    deleteCategoryAction,
    updateCategoryAction
} from '../../../../../store/actions/categoryAction'
import {BaseButton, BaseButtonInverted} from '../../../../../style/buttons'
import {
    ExperienceContainer,
    ExperienceTitleWrapperNew,
    ExperienceButtonBar,
    ExperienceTitle, ExperienceButtonBarRight,
} from '../../../../../style/component-based/profile_experience'
import {FormFieldWrapperDefault} from '../../../../../style/forms'
import {BaseInputStyled} from '../../../../../style/inputs'
import {InputTitle} from '../../../../../style/titles'

const EditCategoryContainer = styled(ExperienceContainer)`
  margin-bottom: ${props => props.theme.spaceL};
`

const EditCategory = ({category, closeEditMode}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const success = await dispatch(updateCategoryAction(category.id, name))
        if (!success) setIsLoading(false)
    }

    const onDeleteHandler = async () => {
        setIsLoading(true)
        const success = await dispatch(deleteCategoryAction(category.id))
        if (!success) setIsLoading(false)
    }

    return (
        <EditCategoryContainer noBorder>
            {
                showDeleteConfirmation && (
                    <DeleteData
                        message="Deleting a category will also delete all the corresponding events. Are you sure you want to delete?"
                        onDeleteHandler={onDeleteHandler}
                        setShowDeleteConfirmation={setShowDeleteConfirmation}
                    />
                )
            }

            <ExperienceTitleWrapperNew>
                <ExperienceTitle>Edit category {category.name}:</ExperienceTitle>
            </ExperienceTitleWrapperNew>

            <form onSubmit={onSubmitHandler}>
                <FormFieldWrapperDefault>
                    <InputTitle>Name</InputTitle>
                    <BaseInputStyled
                        maxLength="50"
                        onChange={e => setName(e.target.value)}
                        required
                        type="text"
                    />
                </FormFieldWrapperDefault>

                <ExperienceButtonBar>
                    <BaseButtonInverted
                        onClick={closeEditMode}
                        type="button"
                    >
                        Cancel
                    </BaseButtonInverted>
                    <ExperienceButtonBarRight>
                        <BaseButtonInverted
                            onClick={setShowDeleteConfirmation}
                            type="button"
                        >
                            Delete
                        </BaseButtonInverted>
                        <BaseButton type="submit">
                            {isLoading ? <ButtonSpinner /> : 'Update'}
                        </BaseButton>
                    </ExperienceButtonBarRight>
                </ExperienceButtonBar>
            </form>
        </EditCategoryContainer>
    )
}

export default EditCategory
