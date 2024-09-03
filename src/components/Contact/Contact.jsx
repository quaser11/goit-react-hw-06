import {ContactItem, ContactName, ContactNumber, InfoContainer, DeleteButton} from "./Contact.styled.js";
import {useDispatch, useSelector} from "react-redux";
import {deleteContact} from "../../redux/contactsOps.js";
import Loader from "../Loader/Loader.jsx";
import {useState} from "react";

const Contact = ({number}) => {
    const [deletingContact, setDeletingContact] = useState(null);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.contacts.loading);
    const items = useSelector(state => state.contacts.items);

    const deleteContactById = (id) => {
        setDeletingContact(id)
        dispatch(deleteContact(id))
    }
    return (
        <ContactItem>
            <InfoContainer>
                <ContactName>{number.name}</ContactName>
                <ContactNumber>{number.number}</ContactNumber>
            </InfoContainer>

            <DeleteButton type='button' onClick={() => deleteContactById(number.id)}
                          disabled={isLoading && number.id === deletingContact}>
                {isLoading && number.id === deletingContact ? <Loader width={12}/> : 'Delete'}
            </DeleteButton>
        </ContactItem>
    )
}

export default Contact;