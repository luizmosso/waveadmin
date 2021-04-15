/* eslint-disable no-undef */
import React, { useState, createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUser } from './User';

export const InstitutionContext = createContext();

export const InstitutionProvider = ({ children }) => {
  const [institution, setInstitution] = useState();
  const { user } = useUser();

  const setCurrentInstitution = async (id, localUser) => {
    try {
      if (!localUser) localUser = user;
      if (!localUser) throw Error('Invalid User');
      if (!id) throw Error('Invalid Institution');
      const firstInstitution = localUser.instituicoes.find(
        ({ _id }) => _id === id
      );
      setInstitution(firstInstitution);
      localStorage.setItem(
        process.env.REACT_APP_INSTITUTION_LOCALSTORAGE,
        JSON.stringify(firstInstitution)
      );
      return firstInstitution;
    } catch (error) {
      return { error: true, message: error.message };
    }
  };

  const clearInstitution = () =>
    localStorage.removeItem(process.env.REACT_APP_INSTITUTION_LOCALSTORAGE);

  const refreshInstitution = (newInstitution) => {
    setInstitution(newInstitution);
    localStorage.setItem(
      process.env.REACT_APP_INSTITUTION_LOCALSTORAGE,
      JSON.stringify(newInstitution)
    );
  };

  useEffect(() => {
    const storedInstitution = localStorage.getItem(
      process.env.REACT_APP_INSTITUTION_LOCALSTORAGE
    );
    if (storedInstitution) setInstitution(JSON.parse(storedInstitution));
  }, []);

  return (
    <InstitutionContext.Provider
      value={{
        institution,
        setCurrentInstitution,
        clearInstitution,
        refreshInstitution,
      }}
    >
      {children}
    </InstitutionContext.Provider>
  );
};

InstitutionProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export function useInstitution() {
  const context = useContext(InstitutionContext);
  if (context === undefined) {
    throw new Error('useInstitution must be used inside its provider.');
  }
  return context;
}
