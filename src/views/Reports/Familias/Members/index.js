import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useInstitution } from '../../../../data/contexts/Institution';
import { fetchFamilies } from '../../../../data/api/family';
import { Table, TableRow, TableColumn } from '../../../../components';
import { calculateAge } from '../../../../utils/general';
import { faixaEtaria } from '../../../../constants/families';

export default function Members({ isMobile, id, onLoad }) {
  const [report, setReport] = useState([]);
  const { institution } = useInstitution();

  useEffect(() => {
    const setReportData = async () => {
      const families = await fetchFamilies(institution?._id);
      let reportData = [];
      families.forEach(({ id, endereco, bairro, telefone, ativo, membros }) => {
        const formatedMembros = membros.map(({ nome, nascimento }) => {
          const idade = calculateAge(new Date(nascimento));
          const faixa = faixaEtaria.find(
            (f) => idade >= f.inicio && idade <= f.fim
          );

          return {
            id,
            nome,
            endereco: `${endereco} - ${bairro}`,
            bairro,
            telefone: telefone || '-',
            idade,
            faixa: faixa.descricao,
            ativo: ativo ? 'SIM' : 'NÃO',
          };
        });

        reportData = [...reportData, ...formatedMembros];
      });
      setReport(reportData);
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
          'Idade',
          'Faixa Etária',
          'Ativa',
        ]}
        isMobile={isMobile}
      >
        {report?.map(
          ({ id, nome, endereco, bairro, telefone, idade, faixa, ativo }) => (
            <TableRow key={nome}>
              <TableColumn>{id}</TableColumn>
              <TableColumn>{nome}</TableColumn>
              <TableColumn>{endereco}</TableColumn>
              <TableColumn>{bairro}</TableColumn>
              <TableColumn>{telefone}</TableColumn>
              <TableColumn>{idade}</TableColumn>
              <TableColumn>{faixa}</TableColumn>
              <TableColumn>{ativo}</TableColumn>
            </TableRow>
          )
        )}
      </Table>
    </>
  );
}

Members.propTypes = {
  isMobile: PropTypes.bool,
  id: PropTypes.string,
  onLoad: PropTypes.func,
};

Members.defaultProps = {
  id: null,
  isMobile: false,
  onLoad: () => {},
};
