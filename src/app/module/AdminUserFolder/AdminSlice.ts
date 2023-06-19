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
import { ApiStatus, IAdminState, IUpdateAdminUserActionProps, IUserForm } from "./Admin.type"
import { createAdminUserApi, deleteAdminUserApi, getAdminUserListApi, updateAdminUserApi } from "./AdminService";


/*test defaultList from Admin.type*/
const initialState: IAdminState = {
    list: [],
    listStatus: ApiStatus.ideal,
    createUserFormStatus: ApiStatus.ideal,
    updateUserFormStatus: ApiStatus.ideal,
};

export const getAdminUserListAction = createAsyncThunk("user/getAdminUserListAction", async () => {
    const response = await getAdminUserListApi();
    return response.data;   
}
);

export const createAdminUserAction = createAsyncThunk("user/createAdminUserAction", async (data: IUserForm) => {
   const response = await createAdminUserApi(data);
   return response.data;
  
});
export const deleteAdminUserAction = createAsyncThunk(
    "user/deleteAdminUserAction",
    async (id: number) => {
      await deleteAdminUserApi(id);
      return id;
    }
  );
  
  export const updateAdminUserAction = createAsyncThunk(
    "user/updateAdminUserAction",
    async ({ id, data }: IUpdateAdminUserActionProps) => {
      const response = await updateAdminUserApi(id, data);
      return response.data;
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
           state.createUserFormStatus = ApiStatus.success;
          
        });
        builder.addCase(createAdminUserAction.rejected, (state) => {
            state.createUserFormStatus= ApiStatus.error;
           
        });

        builder.addCase(deleteAdminUserAction.fulfilled, (state, action) => {
            const newList = state.list.filter((x) => x.id !== action.payload);
            state.list = newList;
          });
          builder.addCase(updateAdminUserAction.pending, (state) => {
            state.updateUserFormStatus = ApiStatus.loading;
          });
          builder.addCase(updateAdminUserAction.fulfilled, (state) => {
            state.updateUserFormStatus = ApiStatus.ideal;
           
          });
          builder.addCase(updateAdminUserAction.rejected, (state) => {
            state.updateUserFormStatus = ApiStatus.error;
            
          });
        },
      });

export default adminSlice.reducer;
export const { resetCreateListStatus } = adminSlice.actions;