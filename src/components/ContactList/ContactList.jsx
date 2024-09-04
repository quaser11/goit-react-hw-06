import Contact from '../Contact/Contact.jsx'
import {List} from './ContactList.styled.js'
import Loader from '../Loader/Loader.jsx';
import {useSelector} from "react-redux";
import {selectVisibleNumbers} from "../../redux/contactsSlice.js";


const ContactList = () => {

    const isLoading = useSelector(state => state.contacts.loading)
    const error = useSelector(state => state.contacts.error)
    const visibleNumbers = useSelector(selectVisibleNumbers);

    return (
        <>
            {isLoading && visibleNumbers.length === 0 && <Loader/>}

            {visibleNumbers && !error && <List>
                {visibleNumbers.map(item => (
                    <Contact number={item} key={item.id}/>
                ))}
            </List>}

            {error && <div>{error}</div>}
        </>
    )
}

export default ContactList