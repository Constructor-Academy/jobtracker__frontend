import Axios from "../../axios";
import {SET_CATEGORIES, UPDATE_CATEGORY, DELETE_CATEGORY} from "../types";
import {decodeMessage} from "../../helpers";
import {setError} from "./errorAction";


export const setCategories = category => {
    return {
        type: SET_CATEGORIES,
        payload: category,
    }
}

export const updateCategory = category => {
    return {
        type: UPDATE_CATEGORY,
        payload: category
    }
}

export const deleteCategory = categoryId => {
    return {
        type: DELETE_CATEGORY,
        payload: categoryId,
    }
}

export const createCategoryAction = name => async (dispatch, getState) => {
    const {accessToken} = getState().userLoginReducer

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
    };

    try {
        const response = await Axios.post("/cv/category/", {name}, config)
            if (response.status >= 200 && response.status <= 299) {
                dispatch(setCategories(response.data))
            }
        return true
    } catch(e) {
        dispatch(setError(decodeMessage(e.response.data)))
        return false
    }
}

export const updateCategoryAction = (categoryId, name) => async (dispatch, getState) => {
    const {accessToken} = getState().userLoginReducer

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
    };

    try {
        const response = await Axios.patch(`/cv/category/${categoryId}/`, {name}, config)
            if (response.status >= 200 && response.status <= 299) {
                dispatch(updateCategory(response.data))
            }
        return true
    } catch(e) {
        dispatch(setError(decodeMessage(e.response.data)))
        return false
    }
}

export const deleteCategoryAction = categoryId => async (dispatch, getState) => {
    const {accessToken} = getState().userLoginReducer

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
    };

    try {
        const response = await Axios.delete(`/cv/category/${categoryId}/`, config)
            if (response.status >= 200 && response.status <= 299) {
                dispatch(deleteCategory(categoryId))
                return true
            }
    } catch(e) {
        dispatch(setError(decodeMessage(e.response.data)))
        return false
    }
}
