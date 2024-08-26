import {ContactItem, ContactName, ContactNumber, InfoContainer, DeleteButton} from "./Contact.styled.js";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/contactsSlice.js";

const Contact = ({number}) => {
    const dispatch = useDispatch();
    return (
        <ContactItem>
            <InfoContainer>
                <ContactName>{number.name}</ContactName>
                <ContactNumber>{number.number}</ContactNumber>
            </InfoContainer>

            <DeleteButton type='button' onClick={() => dispatch(deleteContact(number.id))}>Delete</DeleteButton>
        </ContactItem>
    )
}

export default Contact;