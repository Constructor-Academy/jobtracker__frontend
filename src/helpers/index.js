import moment from 'moment'

import briefcase from '../assets/briefcase.png'
import business from '../assets/business_icon.png'
import development from '../assets/development_icon.png'
import education from '../assets/education_icon.png'
import finance from '../assets/finance_icon.png'
import hospital from '../assets/hospital_icon.png'
import marketing from '../assets/marketing_icon.png'
import propulsion from '../assets/Propulsion_only_Rocket.png'
import i18next from '../i18n'
import {addMessage} from '../store/actions/messageAction'


// DATE STUFF
export const convertToMonthAndDate = (date) => {
    if (date) {
        return moment(date).format('MMMM YYYY')
    } else {
        const i18n = i18next
        return i18n.t('profile:shared.present')
    }
}

export const convertToBirthDate = (date, format) => {
    return moment(date, format).format('DD. MMMM YYYY')
}

// SKILLS STUFF
export const decodeSkillLevel = (level) => {
    switch (level) {
    case 'NA':
        return 'native'
    case 'BA':
        return 'basic'
    case 'IM':
        return 'intermediate'
    case 'PR':
        return 'proficient'
    default:
        return ''
    }
}

// GET JOB ICON
export const getJobIcon = (category) => {
    switch (category) {
    case 'Finance':
        return finance
    case 'Information Technology':
        return development
    case 'Education and Training':
        return education
    case 'Marketing and Sales':
        return marketing
    case 'Business Administration':
        return business
    case 'Health Science':
        return hospital
    case 'Technology':
        return development
    case 'Others':
        return briefcase
    default:
        return propulsion
    }
}

// LINK FORMATTER
export const formatLink = (link) => {
    if (link) {
        return link.includes('http') ? link : 'http://' + link
    } else {
        return link
    }
}

// SERVER MESSAGE DECODE
export const decodeMessage = (data) => {
    let message = ''
    Object.keys(data).map(
        (key) =>
            (message +=
                `${key.charAt(0).toUpperCase() + key.slice(1)}: ${data[key]}` +
                '\n')
    )
    return message
}

// HASH TO BULLET POINT CONVERTER
export const decodeDescription = (content) => {
    let convertedContent = content.replace(/(\r\n-|\n-|\r-)/gm, '•')
    convertedContent =
        convertedContent.indexOf('-') === 0
            ? '•' + convertedContent.substring(1)
            : convertedContent
    convertedContent = convertedContent.split(/(?=•)/)
    return convertedContent
}

// COLOR CHANGER
export const LightenDarkenColor = (col, amt) => {
    let usePound = false

    if (col[0] === '#') {
        col = col.slice(1)
        usePound = true
    }

    let num = parseInt(col, 16)

    let r = (num >> 16) + amt

    if (r > 255) r = 255
    else if (r < 0) r = 0

    let b = ((num >> 8) & 0x00ff) + amt

    if (b > 255) b = 255
    else if (b < 0) b = 0

    let g = (num & 0x0000ff) + amt

    if (g > 255) g = 255
    else if (g < 0) g = 0

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export const hexToChangedHSL = (hex, changeValue) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    let r = parseInt(result[1], 16)
    let g = parseInt(result[2], 16)
    let b = parseInt(result[3], 16)
    r /= 255
    g /= 255
    b /= 255
    let max = Math.max(r, g, b),
        min = Math.min(r, g, b)
    let h,
        s,
        l = (max + min) / 2
    if (max === min) {
        h = s = 0 // achromatic
    } else {
        let d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
        case r:
            h = (g - b) / d + (g < b ? 6 : 0)
            break
        case g:
            h = (b - r) / d + 2
            break
        case b:
            h = (r - g) / d + 4
            break
        default:
            break
        }
        h /= 6
    }

    h = Math.floor(h * 360)
    s = Math.floor(s * 100)
    l = Math.floor(l * 100) + changeValue

    return `hsl(${h}, ${s}%, ${l}%)`
}


// If this returns true, Axios could not connect to the backend
// https://github.com/axios/axios/issues/383
const isNetworkError = err => {
    return !!err.isAxiosError && !err.response
}

export const handleNetworkError = async (err, dispatch) => {
    const i18n = i18next
    if (isNetworkError(err)) {
        await dispatch(addMessage({detail: i18n.t('common:errors.network'), Type: 'error'}))
        return true
    }
    return false
}
