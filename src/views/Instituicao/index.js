import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Container, Row, Field } from './styles';
import { useTopBar, Input, Flex, Button, Card, Banner } from '../../components';
import { useInstitution, useUser } from '../../data';
import { colors } from '../../components/Theme';
import { updateInstitution } from '../../data/api';

function Instituicao() {
  const { setTopBarTitle } = useTopBar();
  const { institution, refreshInstitution } = useInstitution();
  const { refreshUser } = useUser();

  const [disabled, setDisabled] = useState(true);
  const [alterar, showAlterar] = useState(true);
  const [salvar, showSalvar] = useState(false);
  const [newInstitution, setNewInstitution] = useState();
  const [banner, setBanner] = useState();

  useEffect(() => {
    setTopBarTitle('Dados da Instituição');
  }, []);

  const setUpDate = () => {
    const date = new Date(dataCadastro);
    return moment(date).format('DD/MM/YYYY');
  };

  const handleAlterar = () => {
    setDisabled(false);
    showAlterar(false);
    showSalvar(true);
  };

  const setField = (name, value) => {
    if (newInstitution[name] !== value) {
      const changedField = {};
      changedField[name] = value;
      setNewInstitution({ ...newInstitution, ...changedField });
    }
  };

  const saveInstitution = async () => {
    const updatedInstitution = await updateInstitution(newInstitution);
    if (updatedInstitution.error) {
      setBanner({
        content: updatedInstitution.error || 'Erro ao salvar a instituição',
        error: true,
      });
      return;
    }

    setBanner({
      content: 'Os dados da instituição foram alterados com sucesso!',
      success: true,
    });
    await refreshUser();
    await refreshInstitution(updatedInstitution);
    setNewInstitution(updatedInstitution);
    showSalvar(false);
    showAlterar(true);
    setDisabled(true);
  };

  useEffect(() => {
    if (institution) setNewInstitution(institution);
  }, [institution]);
  const {
    bairro,
    cidade,
    dataCadastro,
    endereco,
    nome,
    telefone,
    responsavel,
    image,
  } = newInstitution || {};

  return (
    <Container>
      <Card>
        {banner && (
          <Banner
            success={banner.success}
            error={banner.error}
            onDismiss={() => setBanner(null)}
          >
            {banner.content}
          </Banner>
        )}
        <Field bold dark>
          <Input
            type="text"
            placeholder="instituição"
            value={nome}
            disabled={disabled}
            onChange={(newNome) => setField('nome', newNome)}
          />
        </Field>
        <Field>
          <Input
            type="text"
            label="cadastrado em:"
            disabled
            value={setUpDate()}
          />
        </Field>
        <Row>
          <Field>
            <Input
              type="text"
              label="endereço:"
              placeholder="endereço"
              value={endereco}
              disabled={disabled}
              onChange={(newEndereco) => setField('endereco', newEndereco)}
            />
          </Field>
          <Field>
            <Input
              type="text"
              label="bairro:"
              placeholder="bairro"
              value={bairro}
              disabled={disabled}
              onChange={(newBairro) => setField('bairro', newBairro)}
            />
          </Field>
          <Field>
            <Input
              type="text"
              label="cidade:"
              placeholder="cidade"
              value={cidade}
              disabled={disabled}
              onChange={(newCidade) => setField('cidade', newCidade)}
            />
          </Field>
        </Row>
        <Row>
          <Field>
            <Input
              type="text"
              label="telefone:"
              placeholder="telefone"
              value={telefone}
              disabled={disabled}
              onChange={(newTelefone) => setField('telefone', newTelefone)}
            />
          </Field>
          <Field>
            <Input
              type="text"
              label="responsável:"
              placeholder="responsavel"
              value={responsavel}
              disabled={disabled}
              onChange={(newResponsavel) =>
                setField('responsavel', newResponsavel)
              }
            />
          </Field>
          <Field>
            <Input
              type="text"
              label="Url da imagem:"
              placeholder="url da imagem"
              value={image}
              disabled={disabled}
              onChange={(newImage) => setField('image', newImage)}
            />
          </Field>
        </Row>
        <Flex width="100%" justifyContent="flex-start" margin="0 0 1.6rem 0">
          {alterar && (
            <Button
              backgroundColor={colors.blue}
              mr={2}
              onClick={handleAlterar}
            >
              ALTERAR
            </Button>
          )}
          {salvar && (
            <Button backgroundColor={colors.success} onClick={saveInstitution}>
              SALVAR
            </Button>
          )}
        </Flex>
      </Card>
    </Container>
  );
}

export default Instituicao;
