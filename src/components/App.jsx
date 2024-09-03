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

    const isLoading = useSelector(state => state.contacts.loading)
    const error = useSelector(state => state.contacts.error)
    const visibleNumbers = useSelector(selectVisibleNumbers);

    console.log(visibleNumbers)
    return (
        <>
            <ContactForm/>
            <SearchBox/>
            <ContactList visibleNumbers={visibleNumbers} isLoading={isLoading} error={error} />
        </>
    )
}

export default App
