import {
    LOGIN,
    LOGOUT,
    SET_USER_ADMINS,
    UPDATE_USER,
    REFRESH_USER,
    SET_SHOW_PROFILE_COMPLETENESS_POPUP,
    SET_CATEGORIES,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    SET_EVENTS,
    SET_UPDATED_EVENT,
    DELETE_EVENT,
} from '../types'

const profileCompletenessCalculation = data => {
    let result = {
        skills: false,
        languages: false,
        educations: false,
        experiences: false,
        general: false,
        contact: false,
        personal: false,
        total: 0,
    }
    // 20% - skills
    if (Array.isArray(data.skills) && data.skills.length) {
        result.skills = true
        result.total += 20
    }
    // 20% - languages
    if (Array.isArray(data.languages) && data.languages.length) {
        result.languages = true
        result.total += 20
    }
    // 20% - education
    if (Array.isArray(data.educations) && data.educations.length) {
        result.educations = true
        result.total += 20
    }
    // 20% - work experience
    if (Array.isArray(data.experiences) && data.experiences.length) {
        result.experiences = true
        result.total += 20
    }
    // 10% (5 inputs) general (personal details in header)
    let generalTotal = 0
    if (data.first_name) {
        generalTotal += 1
        result.total += 2
    }
    if (data.last_name) {
        generalTotal += 1
        result.total += 2
    }
    if (data.user_description) {
        generalTotal += 1
        result.total += 2
    }
    if (data.actual_position) {
        generalTotal += 1
        result.total += 2
    }
    if (data.avatar) {
        generalTotal += 1
        result.total += 2
    }
    if (generalTotal === 5) result.general = true
    //  7% (7 inputs) contact
    let contactTotal = 0
    if (data.phone) {
        contactTotal += 1
        result.total += 1
    }
    if (data.linkedin_profile) {
        contactTotal += 1
        result.total += 1
    }
    if (data.github_profile) {
        contactTotal += 1
        result.total += 1
    }
    if (data.street) {
        contactTotal += 1
        result.total += 1
    }
    if (data.zip) {
        contactTotal += 1
        result.total += 1
    }
    if (data.city) {
        contactTotal += 1
        result.total += 1
    }
    if (data.country) {
        contactTotal += 1
        result.total += 1
    }
    if (contactTotal === 7) result.contact = true
    //  3% (3 inputs) personal
    let personalTotal = 0
    if (data.date_of_birth) {
        personalTotal += 1
        result.total += 1
    }
    if (data.nationality) {
        personalTotal += 1
        result.total += 1
    }
    if (data.permit || data.nationality === 'Switzerland' || data.nationality === 'Schweiz') {
        personalTotal += 1
        result.total += 1
    }
    if (personalTotal === 3) result.personal = true
    return result
}

const initialState = {
    accessToken: null,
    refreshToken: null,
    showProfileCompletenessPopUp: false,
    user: {
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        user_description: null,
        actual_position: null,
        username: null,
        is_Admin: null,
        location: null,
        last_login: null,
        avatar: null,
        jobs_count: null,
        interviews_count: null,
        is_working: null,
        street: null,
        zip: null,
        city: null,
        country: null,
        phone: null,
        linkedin_profile: null,
        github_profile: null,
        date_of_birth: null,
        job_search_area: null,
        skills: [],
        languages: [],
        educations: [],
        experiences: [],
        categories: [],
        profile_completeness: 0,
    },
    authenticated: null,
    // userAdmins needs to be null initially, to do a null check in <Administrators />. Else we get an infinite loop.
    // I think it's because of the withAuth but couldn't fix it in a clean manner
    userAdmins: null,
}

export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN: {
        return {
            ...state,
            accessToken: action.payload.access,
            refreshToken: action.payload.refresh,
            user: {...action.payload.user, profile_completeness: profileCompletenessCalculation(action.payload.user)},
            authenticated: true,
            isAdmin: action.payload.user.is_admin,
        }
    }
    case LOGOUT: {
        return {...initialState}
    }
    case UPDATE_USER: {
        return {
            ...state,
            user: {...action.payload, profile_completeness: profileCompletenessCalculation(action.payload)},
            isAdmin: action.payload.is_admin,
        }
    }
    case REFRESH_USER: {
        return {
            ...state,
            user: {...action.payload, profile_completeness: profileCompletenessCalculation(action.payload)},
        }
    }
    case SET_USER_ADMINS: {
        return {
            ...state,
            userAdmins: action.payload,
        }
    }
    case SET_SHOW_PROFILE_COMPLETENESS_POPUP: {
        return {
            ...state,
            showProfileCompletenessPopUp: action.payload,
        }
    }
    case SET_CATEGORIES: {
        const newCategories = [...state.user.categories, action.payload]
        return {
            ...state,
            user: {...state.user, categories: newCategories}
        }
    }
    case UPDATE_CATEGORY: {
        const newCategories = [...state.user.categories]
        const index = newCategories.findIndex(el => el.id === action.payload.id)
        newCategories.splice(index, 1, action.payload)
        return {
            ...state,
            user: {...state.user, categories: newCategories}
        }
    }
    case DELETE_CATEGORY: {
        const newCategories = [...state.user.categories].filter(el => el.id !== action.payload)
        return {
            ...state,
            user: {...state.user, categories: newCategories}
        }
    }
    case SET_EVENTS: {
        const newCategories = [...state.user.categories]
        const index = newCategories.findIndex(el => el.id === action.payload[0].category)
        newCategories[index].events = action.payload
        return {
            ...state,
            user: {...state.user, categories: newCategories}
        }
    }
    case SET_UPDATED_EVENT: {
        const newCategories = [...state.user.categories]
        const categoryIndex = newCategories.findIndex(el => el.id === action.payload.category)
        const eventIndex = newCategories[categoryIndex].events.findIndex(el => el.id === action.payload.id)
        newCategories[categoryIndex].events.splice(eventIndex, 1, action.payload)
        return {
            ...state,
            user: {...state.user, categories: newCategories}
        }
    }
    case DELETE_EVENT: {
        const newCategories = [...state.user.categories]
        const categoryIndex = newCategories.findIndex(el => el.id === action.payload.categoryId)
        const eventIndex = newCategories[categoryIndex].events.findIndex(el => el.id === action.payload.eventId)
        newCategories[categoryIndex].events.splice(eventIndex, 1)
        return {
            ...state,
            user: {...state.user, categories: newCategories}
        }
    }
    default:
        return state
    }
}
