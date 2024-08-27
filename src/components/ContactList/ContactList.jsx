import Contact from '../Contact/Contact.jsx'
import {List} from './ContactList.styled.js'
import {useSelector} from "react-redux";

const ContactList = () => {
    const numbers = useSelector(state => state.contacts.items)
    const content = useSelector(state => state.filter.name)

    const visibleNumbers = numbers.filter(contact => contact.name.toLowerCase().includes(content.toLowerCase()));
    return (
        <List>
            {/* eslint-disable-next-line react/prop-types */}
            {visibleNumbers.map(item => (
                <Contact number={item} key={item.id}/>
            ))}
        </List>
    )
}

export default ContactList