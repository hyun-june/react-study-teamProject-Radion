import { configureStore } from "@reduxjs/toolkit";
import authenticateSlice from './reducers/authenticateSlice';

const store = configureStore({
  reducer:{
    auth: authenticateSlice,
    /* 아래 계속 추가 */
  }
})

export default store;