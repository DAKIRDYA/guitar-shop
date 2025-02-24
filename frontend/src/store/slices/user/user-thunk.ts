import { DataPathUrl } from "../../../common/constants/const";
import { LoginData, User } from "../../../common/types/user-type";
import { dropToken, saveToken } from "../../../services/token";
import { createAppAsyncThunk } from "../../hooks/createAppAsyncThunk";
import { USER_SLICE_NAME } from "../slice-names";


type PostUserProps = {
  body: {
    name: string;
    email: number;
    password: number;
  };
};


export const checkAuth = createAppAsyncThunk<User, undefined>(
  `${USER_SLICE_NAME}/checkAuth`,
  async (_arg, {extra: api }) => {
    const response = await api.get<User>(DataPathUrl.Login);

    return response.data;
  }
);

export const login = createAppAsyncThunk<User, LoginData>(
  `${USER_SLICE_NAME}/login`,
  async (body, { extra: api }) => {
    const response = await api.post<User>(DataPathUrl.Login, body);
    saveToken(response.data.token);

    return response.data;
  }
);

export const logout = createAppAsyncThunk<unknown, undefined>(
  `${USER_SLICE_NAME}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(DataPathUrl.Logout);
    dropToken();
  }
);

export const addUser = createAppAsyncThunk<User, PostUserProps>(
  `${USER_SLICE_NAME}/addUser`,
  async ({ body }, {extra: api }) => {
    const response = await api.post<User>(
      `${DataPathUrl.addUser}`,
      body
    );
    return response.data;
  }
);
