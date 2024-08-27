import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

import {useSelector} from "react-redux";

const contacts = {
    items: [
        {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
        {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
        {id: "id-3", name: "Eden Clements", number: "645-17-79"},
        {id: "id-4", name: "Annie Copeland", number: "227-91-26"},
    ]
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contacts,
    reducers: {
        addContact: (state, action) => {
            const id = uuidv4();
            state.items.push({...action.payload, id});
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        },
    },
});

export const {addContact, deleteContact} = contactsSlice.actions;





