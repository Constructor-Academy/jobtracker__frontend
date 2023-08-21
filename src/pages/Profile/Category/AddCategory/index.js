import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components/macro'

import {BaseButton} from '../../../../style/buttons'
import {
    ProfileCardContainer,
} from '../../../../style/component-based/profile'
import AddCategoryForm from './AddCategoryForm'


const AddCategoryButton = styled(BaseButton)`
  margin: auto;
  width: 180px;
`


const AddCategory = () => {
    const {t} = useTranslation()
    const [add, setAdd] = useState(false)

    const addToggle = () => {
        setAdd(prevAdd => !prevAdd)
    }

    return (
        <ProfileCardContainer>
            {
                add ? (
                    <AddCategoryForm addToggle={addToggle} />
                ) :  (
                    <AddCategoryButton
                        onClick={addToggle}
                    >
                        {t('profile:category.add_new')}
                    </AddCategoryButton>
                )
            }
        </ProfileCardContainer>
    )
}

export default AddCategory
