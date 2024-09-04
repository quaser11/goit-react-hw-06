import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchContacts} from "../redux/contactsOps.js";
import {selectVisibleNumbers} from "../redux/contactsSlice.js";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])


    return (
        <>
            <ContactForm/>
            <SearchBox/>
            <ContactList/>
        </>
    )
}

export default App
