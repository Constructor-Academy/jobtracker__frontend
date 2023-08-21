import React from 'react'
import {useSelector} from 'react-redux'

import CategoryItem from './CategoryItem'

const CategoriesList = ({editable}) => {
    const categories = useSelector(state => state.userLoginReducer.user.categories)

    return (
        <>
            {
                categories.map(category => {
                    return (
                        <CategoryItem
                            category={category}
                            editable={editable}
                            events={category.events}
                            key={category.name}
                            name={category.name}
                        />
                    )
                })
            }
        </>
    )
}

export default CategoriesList
