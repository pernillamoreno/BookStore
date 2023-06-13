/**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * slice file 
 * (from react redux toolkit site)
 * createSlice is a function that accepts an initial state, 
 * an object of reducer functions, and a "slice name", 
 * and automatically generates action creators and action 
 * types that correspond to the reducers and state.
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus, IAdminState, defaultList } from "./Admin.type"

/*test defaultList from Admin.type*/
const initialState: IAdminState = {
    list:defaultList,
    listStatus: ApiStatus.ideal,
};

const getAdminUserListAction = createAsyncThunk("user/getAdminUserListAction", async () => {
    // api to get list
    //return responce data
}
);

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {

    }
});

export default adminSlice.reducer