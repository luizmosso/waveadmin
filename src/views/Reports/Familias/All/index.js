import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useInstitution } from '../../../../data/contexts/Institution';
import { fetchFamilies } from '../../../../data/api/family';
import { Table, TableRow, TableColumn } from '../../../../components';

export default function All({ isMobile, id, onLoad }) {
  const [report, setReport] = useState([]);
  const { institution } = useInstitution();

  useEffect(() => {
    const setReportData = async () => {
      const families = await fetchFamilies(institution?._id);

      const formatedFamilies = families.map(
        ({ id, endereco, bairro, telefone, ativo, membros, itensDoados }) => {
          const { nome } = membros[0];
          return {
            id,
            nome,
            endereco: `${endereco} - ${bairro}`,
            bairro,
            telefone: telefone || '-',
            membros: membros.length,
            itensDoados,
            ativo: ativo ? 'SIM' : 'NÃO',
          };
        }
      );
      setReport(formatedFamilies);
    };
    if (institution) setReportData();
  }, [institution]);

  useEffect(() => {
    onLoad(report?.length);
  }, [report]);

  return (
    <>
      <Table
        id={id}
        header={[
          'Código',
          'Nome',
          'Endereço',
          'Bairro',
          'Telefone',
          'Qtd Membros',
          'Qtd Cestas',
          'Ativa',
        ]}
        isMobile={isMobile}
      >
        {report?.map(
          ({
            id,
            nome,
            endereco,
            bairro,
            telefone,
            membros,
            itensDoados,
            ativo,
          }) => (
            <TableRow key={id}>
              <TableColumn>{id}</TableColumn>
              <TableColumn>{nome}</TableColumn>
              <TableColumn>{endereco}</TableColumn>
              <TableColumn>{bairro}</TableColumn>
              <TableColumn>{telefone}</TableColumn>
              <TableColumn>{membros}</TableColumn>
              <TableColumn>{itensDoados}</TableColumn>
              <TableColumn>{ativo}</TableColumn>
            </TableRow>
          )
        )}
      </Table>
    </>
  );
}

All.propTypes = {
  isMobile: PropTypes.bool,
  id: PropTypes.string,
  onLoad: PropTypes.func,
};

All.defaultProps = {
  id: null,
  isMobile: false,
  onLoad: () => {},
};
