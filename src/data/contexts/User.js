/* eslint-disable no-undef */
import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { login, fetchUser } from '../api/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  const authenticate = async (email, pwd) => {
    try {
      const usuario = await login(email, pwd);
      if (usuario.error) throw Error(usuario.error);
      setUser(usuario);
      localStorage.setItem(
        process.env.REACT_APP_USER_LOCALSTORAGE,
        JSON.stringify(usuario)
      );
      return usuario;
    } catch (error) {
      return { error: true, message: error.message };
    }
  };

  const clearUser = () =>
    localStorage.removeItem(process.env.REACT_APP_USER_LOCALSTORAGE);

  const refreshUser = async () => {
    try {
      const { _id } = user;
      const institution = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_INSTITUTION_LOCALSTORAGE)
      );

      const newUser = await fetchUser(_id, institution?._id);
      console.log();
      if (newUser.error) throw Error(newUser.error);
      setUser(newUser);
      localStorage.setItem(
        process.env.REACT_APP_USER_LOCALSTORAGE,
        JSON.stringify(newUser)
      );
      return newUser;
    } catch (error) {
      return { error: true, message: error.message };
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem(
      process.env.REACT_APP_USER_LOCALSTORAGE
    );
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem(process.env.REACT_APP_USER_LOCALSTORAGE);
    localStorage.removeItem(process.env.REACT_APP_INSTITUTION_LOCALSTORAGE);
  };

  return (
    <UserContext.Provider
      value={{
        authenticate,
        user,
        setUser,
        logout,
        isLoggedIn,
        setIsLoggedIn,
        clearUser,
        refreshUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used inside its provider.');
  }
  return context;
}
