import React from 'react'
import {useSelector} from 'react-redux'

import {CardsWrapper} from '../../../style/wrappers'
import AppliedInterviewRatioCard from './AppliedInterviewRatioCard'
import FavoriteIndustryCard from './FavoriteIndustryCard'
import JobsCreatedThisWeek from './JobsCreatedThisWeek'
import TotalJobsCard from './TotalJobsCard'


const Cards = () => {
    const browser = useSelector((state) => state.browserReducer.browser)

    return (
        <CardsWrapper browser={browser}>
            <TotalJobsCard />
            <AppliedInterviewRatioCard />
            <JobsCreatedThisWeek />
            <FavoriteIndustryCard />
        </CardsWrapper>
    )
}

export default Cards
