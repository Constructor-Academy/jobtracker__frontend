export const getI18nDashboardColumnTitles = (t) => {
    return {
        WH: t('dashboard:columns.wishlist'),
        AP: t('dashboard:columns.applied'),
        IN: t('dashboard:columns.interview'),
        OF: t('dashboard:columns.offered'),
        AC: t('dashboard:columns.accepted'),
        RJ: t('dashboard:columns.rejected')
    }
}

export const getI18nJobStatus = (codeFromDb, t) => {
    switch(codeFromDb) {
    case 'WH':
        return t('reports:jobs.status.wishlist')
    case 'AP':
        return t('reports:jobs.status.applied')
    case 'IN':
        return t('reports:jobs.status.interview')
    case 'OF':
        return t('reports:jobs.status.offered')
    case 'AC':
        return t('reports:jobs.status.accepted')
    case 'RJ':
        return t('reports:jobs.status.rejected')
    default:
        return ''
    }
}


// Job type
export const getI18nJobType = (type, t) => {
    switch(type) {
    case 'Full-Time':
        return t('jobs:job_type.full_time')
    case 'Part-Time':
        return t('jobs:job_type.part_time')
    case 'Contract':
        return t('jobs:job_type.contract')
    default:
        return type
    }
}

// CHOICEFIELDS
// Choices are only in English in our backend. Following functions should map the choice values to the lang to be displayed

// Job sectors
const jobSectors = [
    {
        label: 'dashboard:jobs.industries.finance',
        value: 'Finance'
    },
    {
        label: 'dashboard:jobs.industries.eudcation',
        value: 'Education and Training'
    },
    {
        label: 'dashboard:jobs.industries.business_admin',
        value: 'Business Administration'
    },
    {
        label: 'dashboard:jobs.industries.marketing',
        value: 'Marketing and Sales'
    },
    {
        label: 'dashboard:jobs.industries.health',
        value: 'Health Science'
    },
    {
        label: 'dashboard:jobs.industries.tech',
        value: 'Technology'
    },
    {
        label: 'dashboard:jobs.industries.others',
        value: 'Others'
    },
]

export const getI18nJobSectors = (t) => {
    return jobSectors.map(sector => {
        return {
            label: t(sector.label),
            value: sector.value
        }
    })
}

export const getI18nJobSector = (name, t) => {
    const sector = jobSectors.find(sector => sector.value === name)
    const data = {
        label: '',
        value: ''
    }
    if (sector) {
        data.label = t(sector.label)
        data.value = sector.value
    }
    return data
}

// Job search area
const jobSearchAreaOptions = [
    {
        value: 'Flexible',
        label: 'profile:header.job_search_area.flexible'
    },
    {
        value: 'Zurich',
        label: 'profile:header.job_search_area.zurich'
    },
    {
        value: 'Munich',
        label: 'profile:header.job_search_area.munich'
    },
    {
        value: 'Bremen',
        label: 'profile:header.job_search_area.bremen'
    },
    {
        value: 'Other',
        label: 'profile:header.job_search_area.other'
    },
]

export const getI18nJobSearchAreas = (t) => {
    return jobSearchAreaOptions.map(lvl => {
        return {
            value: lvl.value,
            label: t(lvl.label),
        }
    })
}

// Skill levels
const skillLevels = [
    {
        value: 'PR',
        label: 'profile:header.skills.lvl.proficient.name',
        code: 'profile:header.skills.lvl.proficient.code',
    },
    {
        value: 'IM',
        label: 'profile:header.skills.lvl.intermediate.name',
        code: 'profile:header.skills.lvl.proficient.code',
    },
    {
        value: 'BA',
        label: 'profile:header.skills.lvl.basic.name',
        code: 'profile:header.skills.lvl.proficient.code',
    },
]

export const getI18nSkillLevels = (t) => {
    return skillLevels.map(lvl => {
        return {
            value: lvl.value,
            label: t(lvl.label),
            code: t(lvl.code),
        }
    })
}

export const getI18nSkillLevel = (codeFromDb, t) => {
    switch(codeFromDb) {
    case 'BA':
        return t('profile:header.skills.lvl.basic.code')
    case 'IM':
        return t('profile:header.skills.lvl.intermediate.code')
    case 'PR':
        return t('profile:header.skills.lvl.proficient.code')
    default:
        return ''
    }
}

// Language levels
const langLevels = [
    {
        value: 'NA',
        label: 'profile:header.languages.lvl.native.name',
        code: 'profile:header.languages.lvl.native.code',
    },
    {
        value: 'PR',
        label: 'profile:header.languages.lvl.proficient.name',
        code: 'profile:header.languages.lvl.proficient.code',
    },
    {
        value: 'IM',
        label: 'profile:header.languages.lvl.intermediate.name',
        code: 'profile:header.languages.lvl.intermediate.code',
    },
    {
        value: 'BA',
        label: 'profile:header.languages.lvl.basic.name',
        code: 'profile:header.languages.lvl.basic.code',
    },
]

export const getI18nLangLevels = (t) => {
    return langLevels.map(lvl => {
        return {
            value: lvl.value,
            label: t(lvl.label),
            code: t(lvl.code),
        }
    })
}

export const getI18nLangLevel = (codeFromDb, t) => {
    switch(codeFromDb) {
    case 'BA':
        return t('profile:header.languages.lvl.basic.code')
    case 'IM':
        return t('profile:header.languages.lvl.intermediate.code')
    case 'PR':
        return t('profile:header.languages.lvl.proficient.code')
    case 'NA':
        return t('profile:header.languages.lvl.native.code')
    default:
        return ''
    }
}

export const getI18nLangLevelName = (codeFromDb, t) => {
    switch(codeFromDb) {
    case 'BA':
        return t('profile:header.languages.lvl.basic.name')
    case 'IM':
        return t('profile:header.languages.lvl.intermediate.name')
    case 'PR':
        return t('profile:header.languages.lvl.proficient.name')
    case 'NA':
        return t('profile:header.languages.lvl.native.name')
    default:
        return ''
    }
}
