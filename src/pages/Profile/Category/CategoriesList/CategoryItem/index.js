import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'

import {resetErrors} from '../../../../../store/actions/errorAction'
import {ProfileEditIconButton} from '../../../../../style/buttons'
import {
    ProfileCardContainer,
    ProfileCardHeaderWrapper,
    ProfileCardTitle
} from '../../../../../style/component-based/profile'
import Event from '../../Event'
import AddEvent from '../../Event/AddEvent'
import EditCategory from '../EditCategory'
import AddEventButton from './AddEventButton'


const CategoryItem = ({name, events, editable, category}) => {
    const {t} = useTranslation()
    const [add, setAdd] = useState(false)
    const [editCategory, setEditCategory] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => dispatch(resetErrors())
    }, [dispatch])

    const addToggle = () => {
        setAdd(prevVal => !prevVal)
    }

    return (
        <ProfileCardContainer>
            <ProfileCardHeaderWrapper>
                <ProfileCardTitle>{name}</ProfileCardTitle>
                {
                    editable && (
                        <ProfileEditIconButton
                            onClick={setEditCategory}
                            title={t('profile:category.edit')}
                        />)
                }
            </ProfileCardHeaderWrapper>

            {editCategory && <EditCategory category={category} closeEditMode={() => setEditCategory(false)} />}

            {
                events.map(event => {
                    return (
                        <Event editable={editable} eventData={event} key={event.id} />
                    )
                })
            }

            {add && <AddEvent addToggle={addToggle} category={category} /> }
            {!add && editable && <AddEventButton setAdd={setAdd} /> }
        </ProfileCardContainer>
    )
}

export default CategoryItem
