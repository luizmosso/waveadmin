import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container, Title, LeftSide } from './styles';
import { TopBarContext } from './context';
import { SettingsIcon, NotificationsIcon, MenuIcon } from '../../Icons';
import { colors } from '../../Theme';
import { SearchBar } from './components';

const { light } = colors;

function TopBar({ isMobile, ...props }) {
  const {
    topBarTitle,
    floatingSideBarVisible,
    showFloatingSideBar,
  } = useContext(TopBarContext);

  const handleMenuClick = () => {
    showFloatingSideBar(!floatingSideBarVisible);
  };

  return (
    <Container {...props}>
      <Title>
        {isMobile ? (
          <MenuIcon color={light} onClick={handleMenuClick} />
        ) : (
          topBarTitle
        )}
      </Title>
      <LeftSide>
        <SearchBar />
        <NotificationsIcon mr={16} color={light} />
        <SettingsIcon mr={16} color={light} />
      </LeftSide>
    </Container>
  );
}

TopBar.propTypes = {
  isMobile: PropTypes.bool,
};

TopBar.defaultProps = {
  isMobile: false,
};

export default TopBar;
