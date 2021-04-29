import React, { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, ReportBox, Title } from './styles';
import {
  TopBarContext,
  Card,
  Flex,
  Button,
  Banner,
  colors,
  mediaQueries,
  ExcelButton,
} from '../../../components';
import All from './All';
import Members from './Members';

const ALL = 'allFamilies';
const MEMBERS = 'allMembers';

function ReportFamilias() {
  const [option, setOption] = useState(null);
  const [banner, setBanner] = useState(false);
  const [reportCount, setReportCount] = useState(0);
  const { setTopBarTitle } = useContext(TopBarContext);
  const isMobile = useMediaQuery(mediaQueries.mobile);

  const options = {
    allFamilies: {
      title: 'Todas as Famílias',
      component: <All isMobile={isMobile} id={ALL} onLoad={setReportCount} />,
    },
    allMembers: {
      title: 'Membros das Famílias',
      component: (
        <Members isMobile={isMobile} id={MEMBERS} onLoad={setReportCount} />
      ),
    },
  };

  useEffect(() => {
    setTopBarTitle('Relatório - Famílias cadastradas');
  }, []);

  return (
    <Container>
      <Card>
        <Flex width="100%" justifyContent="flex-start" margin="0 0 1.6rem 0">
          <Button backgroundColor={colors.blue} onClick={() => setOption(ALL)}>
            FAMÍLIAS
          </Button>
          <Button
            backgroundColor={colors.blue}
            onClick={() => setOption(MEMBERS)}
            ml={2}
          >
            MEMBROS DAS FAMÍLIAS
          </Button>
        </Flex>
        {banner && (
          <Banner
            success={banner.success}
            error={banner.error}
            onDismiss={() => setBanner(null)}
          >
            {banner.content}
          </Banner>
        )}
        {option && (
          <Flex justifyContent="flex-end">
            <p>{`${reportCount} registro${reportCount !== 1 ? 's' : ''}`}</p>
            <ExcelButton
              ml={2}
              backgroundColor={colors.success}
              id="test-table-xls-button"
              className="download-table-xls-button"
              table={option}
              filename="tablexls"
              sheet="tablexls"
              buttonText="Exportar para Excel"
            />
          </Flex>
        )}
        {option && <Title>{options[option]?.title}</Title>}
        <ReportBox>{options[option]?.component}</ReportBox>
      </Card>
    </Container>
  );
}

export default ReportFamilias;
