import {configureStore} from "@reduxjs/toolkit";
import {ContactsReducer} from "./contactsSlice.js";
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