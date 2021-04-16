import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { SideBar, RightContent, TopBar, MainContent } from '../../components';
import Usuarios from '../Usuarios';
import Dashboard from '../Dashboard';
import Instituicao from '../Instituicao';
import { ReportFamilias, ReportAtendimentos } from '../Reports';

function Main(props) {
  const { isBigScreen, isSmallScreen, isMobile } = props;
  const dimensionProps = { isBigScreen, isSmallScreen, isMobile };

  return (
    <Container>
      <SideBar {...dimensionProps} />
      <RightContent>
        <TopBar isMobile={isMobile} />
        <MainContent>
          <Switch>
            <Route exact path="/usuarios" component={Usuarios} />
            <Route exact path="/instituicao" component={Instituicao} />
            <Route exact path="/report/familias" component={ReportFamilias} />
            <Route
              exact
              path="/report/atendimentos"
              component={ReportAtendimentos}
            />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </MainContent>
      </RightContent>
    </Container>
  );
}

Main.propTypes = {
  isBigScreen: PropTypes.bool,
  isSmallScreen: PropTypes.bool,
  isMobile: PropTypes.bool,
};

Main.defaultProps = {
  isBigScreen: false,
  isSmallScreen: false,
  isMobile: false,
};

export default Main;
