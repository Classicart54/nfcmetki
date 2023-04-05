import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? 'https://nfc-m.ru' : 'http://localhost:3000'
export default axios.create({
    baseURL: url,
    withCredentials: true,
})