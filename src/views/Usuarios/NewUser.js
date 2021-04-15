import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Input } from '../../components';

function NewUser({
  instituicao,
  onConfirm,
  onClose,
  usersEmails,
  loading,
  ...props
}) {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();

  const invalidFields = (newUser) =>
    Object.keys(newUser).find((prop) => !prop || prop === '');

  const userExists = (newUser) => usersEmails.includes(newUser.email);

  const invalidUser = (newUser) => {
    let error = null;
    if (invalidFields(newUser)) error = 'Todos os campos devem ser preenchidos';
    if (userExists(newUser)) error = 'Este email já foi utilizado, tente outro';
    return error;
  };

  const handleCreateUser = () => {
    const newUser = { nome, email, pwd, instituicao };
    const error = invalidUser(newUser);
    onConfirm(newUser, error);
  };

  return (
    <Modal
      {...props}
      header="Novo Usuário"
      footer={{
        onAction: handleCreateUser,
        onDiscard: onClose,
        loading,
      }}
      onClose={onClose}
      show
      large
    >
      <Input
        value={nome}
        onChange={setNome}
        placeholder="José Antônio da Silva"
        label="Nome"
        mb="0.8rem"
      />
      <Input
        value={email}
        onChange={setEmail}
        placeholder="jose.antonio@gmail.com"
        label="E-mail"
        type="email"
        mb="0.8rem"
      />
      <Input
        value={pwd}
        password
        onChange={setPwd}
        placeholder="**********"
        label="Senha Inicial"
      />
    </Modal>
  );
}

NewUser.propTypes = {
  instituicao: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  usersEmails: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
};

NewUser.defaultUser = {
  instituicao: null,
  onConfirm: () => {},
  onClose: () => {},
  usersEmails: [],
  loading: false,
};

export default NewUser;
