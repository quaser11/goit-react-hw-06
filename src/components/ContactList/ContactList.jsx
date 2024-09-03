import Contact from '../Contact/Contact.jsx'
import {List} from './ContactList.styled.js'
import Loader from '../Loader/Loader.jsx';


const ContactList = ({visibleNumbers, isLoading, error}) => {
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