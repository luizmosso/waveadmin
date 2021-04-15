import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useInstitution } from '../../../data';

export const TopBarContext = createContext();

export const TopBarProvider = ({ children }) => {
  const [topBarTitle, setupTopBarTitle] = useState('');
  const [topBarUser, setTopBarUser] = useState();
  const [floatingSideBarVisible, showFloatingSideBar] = useState(false);
  const { institution } = useInstitution();

  const setTopBarTitle = (title) => {
    setupTopBarTitle(`${institution?.nome} - ${title}`);
  };

  return (
    <TopBarContext.Provider
      value={{
        topBarTitle,
        setTopBarTitle,
        topBarUser,
        setTopBarUser,
        floatingSideBarVisible,
        showFloatingSideBar,
      }}
    >
      {children}
    </TopBarContext.Provider>
  );
};

TopBarProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export function useTopBar() {
  const context = useContext(TopBarContext);
  if (context === undefined) {
    throw new Error('useTopBar must be used inside its provider.');
  }
  return context;
}
