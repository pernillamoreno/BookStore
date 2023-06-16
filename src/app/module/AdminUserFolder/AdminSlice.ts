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
import { ApiStatus, IAdminState, IUserForm } from "./Admin.type"
import { createAdminUserApi, deleteAdminUserApi, getAdminUserListApi } from "./AdminService";

/*test defaultList from Admin.type*/
const initialState: IAdminState = {
    list: [],
    listStatus: ApiStatus.ideal,
    createUserFormStatus: ApiStatus.ideal
};

export const getAdminUserListAction = createAsyncThunk("user/getAdminUserListAction", async () => {
    const response = await getAdminUserListApi();
    return response.data;   
}
);

export const createAdminUserAction = createAsyncThunk("user/createAdminUserAction", async (data: IUserForm) => {
   const response = await createAdminUserApi(data);
   return response.data;
  
})
export const deleteUserAction = createAsyncThunk(
    "user/deleteAdminUserAction",
    async (id: number) => {
      await deleteAdminUserApi(id);
      return id;
    }
  );

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        resetCreateListStatus : (state) => {
           state.createUserFormStatus = ApiStatus.ideal
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAdminUserListAction.pending, (state) => {
            state.listStatus = ApiStatus.loading;
        });
        builder.addCase(getAdminUserListAction.fulfilled, (state, action) => {
           state.listStatus = ApiStatus.ideal;
           state.list = action.payload
        });
        builder.addCase(getAdminUserListAction.rejected, (state) => {
            state.listStatus = ApiStatus.error
        });
        builder.addCase(createAdminUserAction.pending, (state) => {
            state.createUserFormStatus = ApiStatus.loading;
        });
        builder.addCase(createAdminUserAction.fulfilled, (state, action) => {
           state.createUserFormStatus = ApiStatus.ideal;
        });
        builder.addCase(createAdminUserAction.rejected, (state) => {
            state.createUserFormStatus= ApiStatus.error
        });
        builder.addCase(deleteUserAction.fulfilled, (state, action) => {
            const newList = state.list.filter((x) => x.id !== action.payload);
            state.list = newList;
          });

    },
});

export default adminSlice.reducer;
export const { resetCreateListStatus } = adminSlice.actions