import axios from 'axios'


let baseUrl = ''

if(process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:8000/backend/api/'
} else {
    baseUrl = `${window.location.origin}/backend/api/`
}

const Axios = axios.create({
    baseURL: baseUrl
})

Axios.defaults.baseURL = baseUrl
Axios.defaults.headers.post['Content-Type'] = 'application/json'

export default Axios
