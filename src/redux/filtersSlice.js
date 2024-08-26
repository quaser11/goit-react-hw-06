import { createSlice } from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, {payload}) => {
            return payload
        }
    }
})

export const value = () => {
    return useSelector(state => state.filter)
}

export const {setFilter} = filterSlice.actions;

