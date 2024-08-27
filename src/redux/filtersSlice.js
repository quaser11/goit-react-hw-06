import { createSlice } from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

const filters = {
    name: ''
}
export const filterSlice = createSlice({
    name: 'filter',
    initialState: filters,
    reducers: {
        changeFilter: (state, {payload}) => {
            state.name = payload
        }
    }
})


export const {changeFilter} = filterSlice.actions;

