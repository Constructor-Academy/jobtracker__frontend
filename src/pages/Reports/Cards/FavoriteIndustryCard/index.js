import React from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import briefcase2 from '../../../../assets/briefcase2.png'
import {getI18nJobSector} from '../../../../helpers/i18n'
import {CardContainer} from '../../../../style/containers'



const FavoriteIndustryCard = () => {
    const {t} = useTranslation()
    const jobs = useSelector(state => state.jobsReducer.jobs)
    const allJobsArray = [...jobs.WH, ...jobs.AP, ...jobs.IN, ...jobs.OF, ...jobs.AC, ...jobs.RJ]
    const groupByIndustry = allJobsArray.reduce((acc, job) => {
        acc[job.category] = acc[job.category] + 1 || 1
        return acc
    }, {})
    const values = Object.values(groupByIndustry).sort()
    const highestValue = values[values.length - 1]
    const getIndustry = (object, value) =>  Object.keys(object).find(key => object[key] === value)
    const favoriteIndustry = getIndustry(groupByIndustry, highestValue)
    const i18nFavoriteIndustry = getI18nJobSector(favoriteIndustry, t).label

    return (
        <CardContainer favoriteIndustry>
            <div>
                <label>{t('reports:fav_industry')}</label>
                <span>{i18nFavoriteIndustry}</span>
                <p> </p>
            </div>
            <img alt="briefcase" src={briefcase2} />
        </CardContainer>
    )
}

export default FavoriteIndustryCard
