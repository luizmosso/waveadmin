import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import { TopBarContext } from '../../components';

function Dashboard() {
  const { setTopBarTitle } = useContext(TopBarContext);

  useEffect(() => {
    setTopBarTitle('Dashboard');
  }, []);

  return <Container />;
}

export default Dashboard;
