import axios from 'axios'


const BASE_URL = "https://66d60d83f5859a7042683cd8.mockapi.io/api/v1"

export const getContacts = async () => {
        try{
            const response = await axios.get(`${BASE_URL}/Contact`)
            return response.data
        } catch(error){
            throw Error(error)
        }
}

export const supplementContact = async (contact) => {

    const response = await axios.post(`${BASE_URL}/Contact`, {
        name: contact.name,
        number: contact.number,
    })
    return response.data
}

export const removeContact = async (contactId) => {
    const response = await axios.delete(`${BASE_URL}/Contact/${contactId}`)
    return response.data
}