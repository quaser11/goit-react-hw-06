import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {fetchContacts, deleteContact, addContact} from './contactsOps.js'
import {createSelector} from 'reselect';


const contacts = {
    items: [],
    loading: false,
    error: null,
}

const pending = (state) => {
    return {...state, loading: true, error: null};
}

const rejected = (state, action) => {
    return {...state, loading: false, error: action.payload};
}
export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contacts,
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, state => {
            return {items: [], loading: true, error: null};
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            return {items: action.payload, loading: false, error: null};
        }).addCase(fetchContacts.rejected, (state, action) => {
            return {...state, loading: false, error: action.payload};
        }).addCase(deleteContact.pending, state => {
            pending(state)
        }).addCase(deleteContact.fulfilled, (state, action) => {
            return {
                items: [...state.items.filter(contact => contact.id !== action.payload.id)],
                loading: false,
                error: null
            };
        }).addCase(deleteContact.rejected, (state, action) => {
            rejected(state, action)
        }).addCase(addContact.pending, state => {
            pending(state)
        }).addCase(addContact.fulfilled, (state, action) => {
            return {items: [...state.items, action.payload], loading: false, error: null};
        }).addCase(addContact.rejected, (state, action) => {
            rejected(state, action)
        })
    }
});

const items = state => state.contacts.items;

const filterName = state => state.filter.name;
export const selectVisibleNumbers = createSelector([items, filterName], (items, name) => items.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase())))


