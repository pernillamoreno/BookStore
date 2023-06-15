import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import adminReducer from "./module/AdminUserFolder/AdminSlice"


export const store = configureStore({
  reducer: {
    admin : adminReducer,
  },
});

/*RootState hold states of reducers*/
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
