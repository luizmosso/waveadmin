import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import { TopBarContext } from '../../../components';

function ReportAtendimentos() {
  const { setTopBarTitle } = useContext(TopBarContext);

  useEffect(() => {
    setTopBarTitle('Relatório - Atendimentos realizados');
  }, []);

  return <Container />;
}

export default ReportAtendimentos;
