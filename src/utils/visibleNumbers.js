import {value} from "../redux/filtersSlice.js";
import {getContacts} from "../redux/contactsSlice.js";


export const getVisibleNumbers = () => {
    const numbers = getContacts()
    const content = value()

    return numbers.contacts.filter(contact => contact.name.toLowerCase().includes(content.toLowerCase()));
}