import axios from './axios'

export const newLid = async (name, phone, companyName, question) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const body = { name, phone, companyName, question }
        await axios.post('/api/tg/newlid', body, config)
    } catch (error) {
        console.log(error)
    }
}