import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Input, Button, Banner } from '../../components';
import { Container } from './styles';
import { isEmail } from '../../utils/validators';

function NewUser({
  onConfirm,
  onClose,
  usersEmails,
  user,
  instituicao,
  loading,
  ...props
}) {
  const [nome, setNome] = useState();
  const [emailError, setEmailError] = useState();
  const [email, setEmail] = useState();
  const [nomeError, setNomeError] = useState();
  const [changePassword, setChangePassword] = useState(false);
  const [pwd, setPwd] = useState();
  const [pwdError, setPwdError] = useState();
  const [confirmPwd, setConfirmPwd] = useState();
  const [confirmPwdError, setConfirmPwdError] = useState();
  const [banner, setBanner] = useState(false);

  const userExists = (newUser) => usersEmails.includes(newUser.email);

  const invalidUser = (newUser) => {
    let error = null;
    if (changePassword && (pwdError || confirmPwdError))
      error = 'Senhas inválidas';
    if (nomeError) error = 'Todos os campos devem ser preenchidos';
    if (emailError) error = emailError;
    if (userExists(newUser)) error = 'Este email já foi utilizado, tente outro';
    return error;
  };

  const validatePassword = () => {
    setPwdError(null);
    setConfirmPwdError(null);
    if (!changePassword) return;
    if (!pwd) setPwdError('campo obrigatório');
    if (!confirmPwd) setConfirmPwdError('campo obrigatório');
    if (pwd && confirmPwd && pwd !== confirmPwd) {
      setPwdError('as senhas não coincidem');
      setConfirmPwdError(null);
    }
  };

  const handleEditUser = () => {
    const editedUser = { ...user, nome, email, instituicao, pwd, confirmPwd };
    const error = invalidUser(editedUser);
    if (error) {
      setBanner({ content: error, error: true });
      return;
    }
    onConfirm(editedUser, error);
  };

  useEffect(() => {
    if (user) {
      const { nome: editNome, email: editEmail } = user;
      setNome(editNome);
      setEmail(editEmail);
    }
  }, [user]);

  useEffect(() => {
    validatePassword();
  }, [pwd, confirmPwd]);

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

  return (
    <Modal
      {...props}
      footer={{
        actionTitle: 'Editar',
        onAction: handleEditUser,
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
        disabled
        error={emailError}
      />
      <Container>
        <Button
          mr="0.4rem"
          plain
          onClick={() => setChangePassword(!changePassword)}
        >
          {changePassword ? 'Não alterar senha' : 'Alterar Senha'}
        </Button>
        {changePassword && (
          <>
            <Input
              value={pwd}
              password
              onChange={setPwd}
              placeholder="**********"
              label="Nova Senha"
              disabled={user ? false : true}
              mr="0.4rem"
              changeVisibility={false}
              error={pwdError}
            />
            <Input
              value={confirmPwd}
              password
              onChange={setConfirmPwd}
              placeholder="**********"
              label="Confirmar nova senha"
              disabled={user ? false : true}
              changeVisibility={false}
              error={confirmPwdError}
            />
          </>
        )}
      </Container>
    </Modal>
  );
}

NewUser.propTypes = {
  instituicao: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  usersEmails: PropTypes.arrayOf(PropTypes.string),
  user: PropTypes.shape(),
  loading: PropTypes.bool,
};

NewUser.defaultUser = {
  instituicao: null,
  onConfirm: () => {},
  onClose: () => {},
  usersEmails: [],
  user: null,
  loading: false,
};

export default NewUser;
