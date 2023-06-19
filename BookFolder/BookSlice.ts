import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus, IBookState, IUpdateBookActionProps, IBookForm } from "./Book.type";
import { createBookApi, deleteBookApi, getBookListApi, updateBookApi } from "./BookService";

const initialState: IBookState = {
    list: [],
    listStatus: ApiStatus.ideal,
    createBookFormStatus: ApiStatus.ideal,
    updateBookFormStatus: ApiStatus.ideal,
};

export const getAdminUserListAction = createAsyncThunk("user/getBookListAction", async () => {
    const response = await getBookListApi();
    return response.data;   
}
);

export const createAdminUserAction = createAsyncThunk("user/createBookAction", async (data: IBookForm) => {
   const response = await createBookApi(data);
   return response.data;
  
});
export const deleteAdminUserAction = createAsyncThunk(
    "user/deleteBookAction",
    async (id: number) => {
      await deleteBookApi(id);
      return id;
    }
  );
  
  export const updateAdminUserAction = createAsyncThunk(
    "user/updateBookAction",
    async ({ id, data }: IUpdateBookActionProps) => {
      const response = await updateBookApi(id, data);
      return response.data;
    }
  );

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        resetCreateListStatus : (state) => {
           state.createBookFormStatus = ApiStatus.ideal
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBookListAction.pending, (state) => {
            state.listStatus = ApiStatus.loading;
        });
        builder.addCase(getBookListAction.fulfilled, (state, action) => {
           state.listStatus = ApiStatus.ideal;
           state.list = action.payload
        });
        builder.addCase(getBookListAction.rejected, (state) => {
            state.listStatus = ApiStatus.error
        });
        builder.addCase(createBookAction.pending, (state) => {
            state.createBookFormStatus = ApiStatus.loading;
        });
        builder.addCase(createBookAction.fulfilled, (state, action) => {
           state.createBookFormStatus = ApiStatus.success;
          
        });
        builder.addCase(createBookAction.rejected, (state) => {
            state.createBookFormStatus= ApiStatus.error;
           
        });

        builder.addCase(deleteBookAction.fulfilled, (state, action) => {
            const newList = state.list.filter((x) => x.id !== action.payload);
            state.list = newList;
          });
          builder.addCase(updateBookAction.pending, (state) => {
            state.updateBookFormStatus = ApiStatus.loading;
          });
          builder.addCase(updateBookAction.fulfilled, (state) => {
            state.updateBookFormStatus = ApiStatus.ideal;
          
           
          });
          builder.addCase(updateBookAction.rejected, (state) => {
            state.updateBookFormStatus = ApiStatus.error;
            
            
          });
        },
      });

export default bookSlice.reducer;
export const { resetCreateBookListStatus } = bookSlice.actions;




