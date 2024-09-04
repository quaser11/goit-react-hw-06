import {configureStore} from "@reduxjs/toolkit";
import {contactsSlice} from "./contactsSlice.js";
import {filterSlice} from "./filtersSlice.js";


export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    }
});
