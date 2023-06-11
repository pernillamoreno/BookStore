/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * (from redux toolkit site)
 * createSlice is a function that accepts an initial state, 
 * an object of reducer functions, and a "slice name", 
 * and automatically generates action creators and action 
 * types that correspond to the reducers and state.
 */

import { createSlice } from "@reduxjs/toolkit";


interface IUser {
    id: number;
    Username: string;
    Role: string;
    Purchase: number
}

enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}
interface IUserState {
    list : IUser[],
    listStatus: ApiStatus

}
const initialState: IUserState = {
    list:[],
    listStatus: ApiStatus.ideal,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
});

export default userSlice.reducer