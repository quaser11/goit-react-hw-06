import {configureStore} from "@reduxjs/toolkit";
import {contactsSlice} from "./contactsSlice.js";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {filterSlice} from "./filtersSlice.js";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";

const persistConfig = {
    key: "numbers",
    storage,
    whitelist: ['items']
};

export const ContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
    reducer: {
        contacts: ContactsReducer,
        filter: filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store)