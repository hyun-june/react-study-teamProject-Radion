/* TODO. reducer 예시 . 참고하고 지울 예정 or 변경 후 사용 */

import { createSlice } from "@reduxjs/toolkit"

/* useSelector 사용법 
const id = useSelector((state) => state.auth.id);
*/

let initialState = {
  id:'',
  password:'',
  authenticate:false
}

/* reducer 사용법
const dispatch = useDispatch();
dispatch(authActions.LoginSuccess({id,password}));
*/

const authenticateSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    LoginSuccess(state,action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.authenticate = true;
    },
    LogoutSuccess(state) {
      state.id = '';
      state.password = '';
      state.authenticate = false;
    },
  },
  
})

export const authActions = authenticateSlice.actions;
export default authenticateSlice.reducer