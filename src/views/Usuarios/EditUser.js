import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Input, Button, Banner } from '../../components';
import { Container } from './styles';

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
  const [email, setEmail] = useState();
  const [changePassword, setChangePassword] = useState(false);
  const [pwd, setPwd] = useState();
  const [confirmPwd, setConfirmPwd] = useState();
  const [banner, setBanner] = useState(false);

  const invalidFields = (newUser) =>
    Object.keys(newUser).find((prop) => !prop || prop === '');

  const userExists = (newUser) => usersEmails.includes(newUser.email);

  const invalidUser = (newUser) => {
    let error = null;
    if (invalidFields(newUser)) error = 'Todos os campos devem ser preenchidos';
    if (userExists(newUser)) error = 'Este email já foi utilizado, tente outro';
    return error;
  };

  const handleEditUser = () => {
    const editedUser = { ...user, nome, email, instituicao };
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
      />
      <Input
        value={email}
        onChange={setEmail}
        placeholder="jose.antonio@gmail.com"
        label="E-mail"
        type="email"
        mb="0.8rem"
        disabled
        error="Email is not valid!"
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
              disabled={user ? true : false}
              mr="0.4rem"
            />
            <Input
              value={confirmPwd}
              password
              onChange={setConfirmPwd}
              placeholder="**********"
              label="Confirmar nova senha"
              disabled={user ? true : false}
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
