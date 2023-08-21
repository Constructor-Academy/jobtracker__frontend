import moment from 'moment'

import Axios from '../../axios'
import {decodeMessage} from '../../helpers'
import {setError} from './errorAction'

const getFileName = (title='booklet') => {
    const today = new Date()
    const date = moment(today).format('YYYY_MM_DD')
    return `${date}_${title}`
}

export const bookletDownloadAction = (title, students) => async (dispatch, getState) => {
    const {accessToken} = getState().userLoginReducer

    const config = {
        headers: {Authorization: `Bearer ${accessToken}`},
        params: {
            title,
            students,
        },
        responseType: 'blob'
    }

    try {
        const response = await Axios.get(`/users/booklet/`, config)
        if (response.status >= 200 && response.status <= 299) {
            const file = new Blob([response.data], {type: 'application/pdf'})
            //Build a URL from the file
            const fileURL = URL.createObjectURL(file)
            const link = document.createElement('a')
            link.href = fileURL
            link.setAttribute('download', getFileName(title))
            document.body.appendChild(link)
            link.click()
            window.URL.revokeObjectURL(fileURL)
            return true
        }
    } catch(e) {
        if (e.response) dispatch(setError(decodeMessage(e.response.data)))
        return false
    }
}
