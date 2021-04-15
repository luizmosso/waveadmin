import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Logo from '../../Logo';
import {
  UsersIcon,
  InstitutionIcon,
  ChartIcon,
  QuantityIcon,
} from '../../Icons';
import { InstitutionBox, List, ListItem } from './components';
import { TopBarContext } from '../TopBar/context';

function SideBar(props) {
  const [fitBar, setFitBar] = useState(false);
  const { isBigScreen, isSmallScreen, isMobile } = props;
  const { floatingSideBarVisible, showFloatingSideBar } = useContext(
    TopBarContext
  );

  useEffect(() => {
    setFitBar(!(isMobile || !isSmallScreen));
    if (!isMobile && isSmallScreen) showFloatingSideBar(false);
  }, [isMobile, isSmallScreen, isBigScreen]);

  useEffect(() => {
    setFitBar(!floatingSideBarVisible && isSmallScreen);
  }, [floatingSideBarVisible]);

  const showBar = () => {
    return (isMobile && floatingSideBarVisible) || !isMobile;
  };

  return showBar() ? (
    <Container fitBar={fitBar} floatingSideBarVisible={floatingSideBarVisible}>
      <Logo my={fitBar ? 30 : 16} onlyIcon={fitBar} linkTo="/" />
      {!fitBar && <InstitutionBox />}
      <List title="ENTIDADES" noTitle={fitBar}>
        <ListItem
          Icon={InstitutionIcon}
          description="Instituição"
          path="/instituicao"
          onlyIcons={fitBar}
        />
        <ListItem
          Icon={UsersIcon}
          description="Usuários"
          path="/usuarios"
          onlyIcons={fitBar}
        />
      </List>
      <List title="RELATÓRIOS" noTitle={fitBar}>
        <ListItem
          Icon={QuantityIcon}
          description="Famílias Cadastradas"
          path="/report/familias"
          onlyIcons={fitBar}
        />
        <ListItem
          Icon={ChartIcon}
          description="Atendimentos"
          path="/report/atendimentos"
          onlyIcons={fitBar}
        />
      </List>
    </Container>
  ) : (
    ''
  );
}

SideBar.propTypes = {
  isBigScreen: PropTypes.bool,
  isSmallScreen: PropTypes.bool,
  isMobile: PropTypes.bool,
};

SideBar.defaultProps = {
  isBigScreen: false,
  isSmallScreen: false,
  isMobile: false,
};

export default SideBar;
