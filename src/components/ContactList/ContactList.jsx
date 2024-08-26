import Contact from '../Contact/Contact.jsx'
import {List} from './ContactList.styled.js'
import {getVisibleNumbers} from "../../utils/visibleNumbers.js";

const ContactList = () => {
    const numbers = getVisibleNumbers();
    return (
        <List>
            {/* eslint-disable-next-line react/prop-types */}
            {numbers.map(item => (
                <Contact number={item} key={item.id}/>
            ))}
        </List>
    )
}

export default ContactList