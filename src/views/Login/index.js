import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Container, Box, Form, Fields, SubTitle } from './styles';
import { Logo, Input, Button } from '../../components';
import { useUser, useInstitution } from '../../data/contexts';

function Login() {
  const { authenticate, logout } = useUser();
  const { setCurrentInstitution } = useInstitution();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const { addToast } = useToasts();

  useEffect(() => {
    logout();
  }, []);

  const doLogin = async () => {
    const user = await authenticate(email, pwd);
    if (user.error) {
      addToast(user.message, {
        appearance: 'error',
        autoDismiss: true,
      });
    } else {
      setCurrentInstitution(user.instituicoes[0]._id, user);
      history.push('/');
    }
  };

  return (
    <Container>
      <Box>
        <Form>
          <Logo />
          <SubTitle>Entre com sua conta</SubTitle>
          <Fields px={4} mt={5}>
            <Input
              label="E-mail"
              type="email"
              placeholder="seu@email.com.br"
              value={email}
              onChange={setEmail}
            />
            <Input
              label="Senha"
              type="password"
              mt={2}
              value={pwd}
              onChange={setPwd}
            />
            <Button mt={4} onClick={doLogin} width="100%">
              Entrar
            </Button>
          </Fields>
        </Form>
      </Box>
    </Container>
  );
}

export default Login;
