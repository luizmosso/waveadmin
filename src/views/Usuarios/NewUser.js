import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Input, Banner } from '../../components';
import { isEmail } from '../../utils/validators';

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
  const [emailError, setEmailError] = useState();
  const [nomeError, setNomeError] = useState();
  const [pwdError, setPwdError] = useState();
  const [banner, setBanner] = useState(false);

  const userExists = (newUser) => usersEmails.includes(newUser.email);

  const invalidUser = (newUser) => {
    let error = null;
    if (nomeError || pwdError) error = 'Todos os campos devem ser preenchidos';
    if (emailError) error = emailError;
    if (userExists(newUser)) error = 'Este email já foi utilizado, tente outro';
    return error;
  };

  const handleCreateUser = () => {
    const newUser = { nome, email, pwd, instituicao };
    const error = invalidUser(newUser);
    if (error) {
      setBanner({ content: error, error: true });
      return;
    }
    onConfirm(newUser, error);
  };

  useEffect(() => {
    setEmailError(
      email === ''
        ? 'campo obrigatório'
        : isEmail(email)
        ? ''
        : 'Email is not valid!'
    );
  }, [email]);

  useEffect(() => {
    setNomeError(nome === '' ? 'campo obrigatório' : '');
  }, [nome]);

  useEffect(() => {
    setPwdError(pwd === '' ? 'campo obrigatório' : '');
  }, [pwd]);

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
      {banner && (
        <Banner
          success={banner.success}
          error={banner.error}
          onDismiss={() => setBanner(null)}
        >
          {banner.content}
        </Banner>
      )}
      <Input
        value={nome}
        onChange={setNome}
        placeholder="José Antônio da Silva"
        label="Nome"
        mb="0.8rem"
        error={nomeError}
      />
      <Input
        value={email}
        onChange={setEmail}
        placeholder="jose.antonio@gmail.com"
        label="E-mail"
        type="email"
        mb="0.8rem"
        error={emailError}
        autoComplete="off"
      />
      <Input
        value={pwd}
        password
        onChange={setPwd}
        placeholder="**********"
        label="Senha Inicial"
        error={pwdError}
        autoComplete="off"
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
