import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import { TopBarContext } from '../../../components';

function ReportFamilias() {
  const { setTopBarTitle } = useContext(TopBarContext);

  useEffect(() => {
    setTopBarTitle('Relatório - Famílias cadastradas');
  }, []);

  return <Container />;
}

export default ReportFamilias;
