/* eslint-disable no-undef */
import jwtDecode from 'jwt-decode';
import { refreshUserToken } from './user';

export const getUserFromLocalStorage = () => {
  return JSON.parse(
    localStorage.getItem(process.env.REACT_APP_USER_LOCALSTORAGE)
  );
};

export const getDefaultRequestData = (method, body, authenticated) => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-mode': 'SUN',
    ...(authenticated
      ? { Authorization: `Bearer ${getUserFromLocalStorage()?.token}` }
      : {}),
  },
  body,
});

const tokenExpired = (token) => {
  const decoded = jwtDecode(token);
  const now = Date.now() / 1000;
  return decoded.exp < now;
};

export const refreshToken = async () => {
  const user = getUserFromLocalStorage();
  if (!user) return;
  const { token: oldToken, refreshToken: oldRefreshToken, _id } = user;

  if (tokenExpired(oldToken)) {
    if (tokenExpired(oldRefreshToken)) {
      localStorage.removeItem(process.env.REACT_APP_USER_LOCALSTORAGE);
      window.location.pathname = '/login';
    }

    const updatedUser = await refreshUserToken(_id, oldRefreshToken);

    localStorage.setItem(
      process.env.REACT_APP_USER_LOCALSTORAGE,
      JSON.stringify(updatedUser)
    );
  }
};
