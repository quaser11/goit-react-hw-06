import {getContacts, supplementContact, removeContact} from "../numbersApi/number-api.js";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try{
            const response = await getContacts();
            return response
        } catch (error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try{
            const response = await removeContact(contactId);
            return response
        } catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const addContact = createAsyncThunk("contacts/addContact",
    async (contact, thunkAPI) => {
        try{
            const response = supplementContact(contact)
            return response
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    })
