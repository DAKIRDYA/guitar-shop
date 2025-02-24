import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizationStatus, TextError, TOKEN } from "../../../common/constants/const";
import { UserState } from "../../types";
import { USER_SLICE_NAME } from "../slice-names";
import { LoginData, User } from "../../../common/types/user-type";
import { addUser, checkAuth, login, logout } from "./user-thunk";
import { dropToken, saveToken } from "../../../services/token";
import { mockUsers } from "../../../mocks/user-mock";
import { toast } from "react-toastify";

const initialState: UserState = {
  info: mockUsers[0],
  status: AuthorizationStatus.Unknown,
};

export const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {
    //Заглушки на время отсутствия связи с бэкендом
    //Авторизация и регистрация
    authorize(state,action:PayloadAction<LoginData>) {
      //Сверим юзера с моками
        mockUsers.every((user) => {
          if (user.email === action.payload?.email && user.password === action.payload?.password) {
            state.info = {...user}
            saveToken(TOKEN);
            state.status = AuthorizationStatus.Auth;
            return true
          }
      })
      console.log('Авторизация : ', state.status);
      if (state.status !== AuthorizationStatus.Auth) {
        toast.error(TextError.FailedAuthorization);
      }
    },
    unAuthorize(state) {
      state.status = AuthorizationStatus.NoAuth;
      dropToken();
    },
    //Регистрация нового пользователя
    registrate(state, action:PayloadAction<User>) {
      state.info = action.payload;
      state.status = AuthorizationStatus.Auth;
    },


  },
  extraReducers: (builder) => {
    builder
      .addCase(
        checkAuth.fulfilled,
        (state: UserState, action: PayloadAction<User>) => {
          state.info = action.payload;
          state.status = AuthorizationStatus.Auth;
        }
      )
      .addCase(
        addUser.fulfilled,
        (state: UserState, action: PayloadAction<User>) => {
          state.info = action.payload;
          state.status = AuthorizationStatus.Auth;
        }
      )
      .addCase(
        login.fulfilled,
        (state: UserState, action: PayloadAction<User>) => {
          state.info = action.payload;
          state.status = AuthorizationStatus.Auth;
        }
      )
      .addCase(logout.fulfilled, (state: UserState) => {
        state.info = {name:'',email:'',password:'',token:''};
        state.status = AuthorizationStatus.NoAuth;
      })
      .addCase(
        checkAuth.rejected,
        (state: UserState) => {
          state.status = AuthorizationStatus.NoAuth;
        }
      );
  },
  selectors: {
    userStatus: (state) => state.status,
    user: (state) => state.info,
    authorize: (state) => state.status,
    registrate: (state) => state.status
  },
});
export default userSlice;
export const userSelectors = userSlice.selectors;
export const userActions = {...userSlice.actions,checkAuth, login, logout,addUser};
