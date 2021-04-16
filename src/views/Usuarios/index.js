import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, IconContainer } from './styles';
import { colors, useTopBar, EditIcon, DeleteIcon } from '../../components';
import {
  Card,
  Table,
  Row,
  Column,
  mediaQueries,
  Badge,
  Button,
  Flex,
  Banner,
  Modal,
} from '../../components';
import NewUser from './NewUser';
import EditUser from './EditUser';
import AssociateUser from './AssociateUser';
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  associateUser,
} from '../../data/api';
import { useInstitution } from '../../data';

function Usuarios() {
  const { setTopBarTitle } = useTopBar();
  const isMobile = useMediaQuery(mediaQueries.mobile);

  const [users, setUsers] = useState([]);
  const [usersEmails, setUsersEmails] = useState([]);
  const [userModal, setUserModal] = useState();
  const [banner, setBanner] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState();
  const [loading, setLoading] = useState(false);
  const { institution } = useInstitution() || {};

  const getAndSetUsers = async () => {
    try {
      const fetchedUsers = await fetchUsers(institution._id);
      if (fetchedUsers.error) throw Error(fetchedUsers.error);
      setUsers(fetchedUsers);
    } catch (error) {
      setBanner({
        content: error.message || 'Erro ao salvar o usuário',
        error: true,
      });
    }
  };

  useEffect(() => {
    setTopBarTitle('Usuários Cadastrados');
    if (institution) getAndSetUsers();
  }, [institution]);

  const handleNovoUsuario = () => {
    setUserModal({ mode: 'create' });
    setBanner(false);
  };

  const handleUsuarioExistente = () => {
    setUserModal({ mode: 'associate' });
    setBanner(false);
  };

  const handleEditUsuario = (targetUser) => {
    setUserModal({ mode: 'edit', user: targetUser });
    setBanner(false);
  };

  const handleCreateUser = async (newUser, error) => {
    await saveUser(newUser, error, createUser, 'Usuário foi cadastrado');
  };

  const handleAssociateUser = async (newUser, error) => {
    try {
      if (error) {
        setBanner({ content: error, error: true });
        return;
      }
      setLoading(true);
      await associateUser(newUser);
      getAndSetUsers();
      setBanner({
        content: 'O usuário agora faz parte da sua associação',
        success: true,
      });
    } catch (error) {
      setBanner({ content: 'Erro ao associar o usuário', error: true });
    } finally {
      setLoading(false);
      setUserModal(null);
    }
  };

  const handleEditUser = async (newUser, error) => {
    await saveUser(newUser, error, updateUser, 'Usuário foi atualizado');
  };

  const saveUser = async (newUser, error, apiMethod, successMessage) => {
    setLoading(true);
    if (error) {
      setBanner({ content: error, error: true });
      return;
    }
    try {
      const { error } = await apiMethod(newUser);
      if (error) {
        let message = error;
        if (message.includes('Usuário já cadastrado'))
          message = `${message}, você pode associá-lo a sua instituição clicando no botão azul acima`;
        throw Error(message);
      }
      getAndSetUsers();
      setBanner({ content: successMessage, success: true });
    } catch (error) {
      setBanner({
        content: error.message || 'Erro ao salvar o usuário',
        error: true,
      });
    } finally {
      setLoading(false);
      setUserModal(null);
    }
  };

  const handleDeleteUser = async (id, successMessage) => {
    try {
      setLoading(true);
      await deleteUser(id, institution._id);
      getAndSetUsers();
      setBanner({ content: successMessage, success: true });
    } catch (error) {
      setBanner({ content: 'Erro ao excluir o usuário', error: true });
    } finally {
      setLoading(false);
      setConfirmationModal(null);
    }
  };

  const showConfirmationModal = (actionTitle, onAction, onDiscard, content) => {
    setConfirmationModal({
      footer: {
        actionTitle,
        onAction,
        onDiscard,
      },
      onClose: onDiscard,
      children: content,
    });
  };

  useEffect(() => {
    if (users?.length > 0) setUsersEmails(users.map(({ nome }) => nome));
  }, [users]);

  return (
    <Container>
      <Card>
        <Flex width="100%" justifyContent="flex-start" margin="0 0 1.6rem 0">
          <Button backgroundColor={colors.success} onClick={handleNovoUsuario}>
            + NOVO USUÁRIO
          </Button>
          <Button
            backgroundColor={colors.blue}
            onClick={handleUsuarioExistente}
            ml={2}
          >
            ASSOCIAR USUÁRIO EXISTENTE
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
        <Table header={['Nome', 'Email', 'Status', '']} isMobile={isMobile}>
          {users?.map(({ _id, nome, email, status }) => (
            <Row key={_id}>
              <Column>{nome}</Column>
              <Column>{email}</Column>
              <Column>
                <Badge variant={status === 'active' ? 'success' : 'error'}>
                  {status}
                </Badge>
              </Column>
              <Column>
                <IconContainer
                  mr={8}
                  tooltip="Editar"
                  onClick={() =>
                    handleEditUsuario({ _id, nome, email, status })
                  }
                >
                  <EditIcon />
                </IconContainer>
                <IconContainer
                  tooltip="Excluir"
                  onClick={() =>
                    showConfirmationModal(
                      'Excluir',
                      () => handleDeleteUser(_id, 'Usuário foi excluído'),
                      () => setConfirmationModal(null),
                      'Tem certeza que deseja excluir o usuário? Essa operação é irreversível'
                    )
                  }
                >
                  <DeleteIcon />
                </IconContainer>
              </Column>
            </Row>
          ))}
        </Table>
        {userModal?.mode === 'create' && (
          <NewUser
            onClose={() => setUserModal(null)}
            onConfirm={handleCreateUser}
            instituicao={institution._id}
            usersEmails={usersEmails}
            loading={loading}
          />
        )}
        {userModal?.mode === 'associate' && (
          <AssociateUser
            onClose={() => setUserModal(null)}
            onConfirm={handleAssociateUser}
            instituicao={institution._id}
            loading={loading}
            usersEmails={usersEmails}
          />
        )}
        {userModal?.mode === 'edit' && (
          <EditUser
            header={userModal.user.nome}
            onClose={() => setUserModal(null)}
            onConfirm={handleEditUser}
            instituicao={institution._id}
            usersEmails={usersEmails}
            user={userModal.user}
            loading={loading}
          />
        )}
        <Modal
          show={confirmationModal}
          {...confirmationModal}
          loading={loading}
        />
      </Card>
    </Container>
  );
}

export default Usuarios;
