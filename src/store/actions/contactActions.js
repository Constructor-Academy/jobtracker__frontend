import Axios from '../../axios'


export const newContactForm = formInfo => async () => {
    await Axios.post('contact/new/', formInfo)
}

