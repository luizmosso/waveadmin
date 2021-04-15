import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Input } from '../../components';

function AssociateUser({
  instituicao,
  onConfirm,
  onClose,
  usersEmails,
  loading,
  ...props
}) {
  const [email, setEmail] = useState();

  const invalidFields = (newUser) =>
    Object.keys(newUser).find((prop) => !prop || prop === '');

  const userExists = (newUser) => usersEmails.includes(newUser.email);

  const invalidUser = (newUser) => {
    let error = null;
    if (invalidFields(newUser)) error = 'Todos os campos devem ser preenchidos';
    if (userExists(newUser)) error = 'Este email já foi utilizado, tente outro';
    return error;
  };

  const handleAssociateUser = () => {
    const newUser = { email, instituicao };
    const error = invalidUser(newUser);
    onConfirm(newUser, error);
  };

  return (
    <Modal
      {...props}
      header="Digite o email do usuário que deseja associar à sua instituição."
      footer={{
        onAction: handleAssociateUser,
        onDiscard: onClose,
        loading,
      }}
      onClose={onClose}
      show
      large
    >
      <Input
        value={email}
        onChange={setEmail}
        placeholder="jose.antonio@gmail.com"
        label="E-mail"
        type="email"
        mb="0.8rem"
      />
    </Modal>
  );
}

AssociateUser.propTypes = {
  instituicao: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  usersEmails: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
};

AssociateUser.defaultUser = {
  instituicao: null,
  onConfirm: () => {},
  onClose: () => {},
  usersEmails: [],
  loading: false,
};

export default AssociateUser;
