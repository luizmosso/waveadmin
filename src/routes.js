/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useUser } from './data/contexts';
import { mediaQueries } from './components/Theme';
import { MainView, LoginView } from './views';

const AppRoutes = () => {
  const { bigScreen, smallScreen, mobile } = mediaQueries;
  const isBigScreen = useMediaQuery(bigScreen);
  const isSmallScreen = useMediaQuery(smallScreen);
  const isMobile = useMediaQuery(mobile);

  const dimensionProps = { ...{ isBigScreen, isSmallScreen, isMobile } };

  const { isLoggedIn, setIsLoggedIn, setUser } = useUser();

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_USER_LOCALSTORAGE)
    );
    if (!storedUser) {
      setIsLoggedIn(false);
      setUser(null);
      return;
    }

    if (!isLoggedIn) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, [isLoggedIn, setIsLoggedIn, setUser]);

  return (
    <Switch>
      <Route
        exact
        path="/login"
        render={() => <LoginView {...dimensionProps} />}
      />
      <Route path="/" render={() => <MainView {...dimensionProps} />} />
      {!isLoggedIn && (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              redirect: location.pathname,
            },
          }}
        />
      )}
    </Switch>
  );
};

export default withRouter(AppRoutes);
