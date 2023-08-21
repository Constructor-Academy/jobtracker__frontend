import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import {CurrentlyViewingContainer} from '../../../style/containers'


const CurrentlyViewing = () => {
    const {displayedUser} = useSelector(state => state.jobsReducer)
    const {t} = useTranslation()

    return (
        <CurrentlyViewingContainer>
            {t('reports:reports_from')}: <span>{displayedUser.first_name} {displayedUser.last_name}</span>
        </CurrentlyViewingContainer>
    )
}

export default CurrentlyViewing
