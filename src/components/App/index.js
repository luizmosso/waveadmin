import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { Container } from './styles';
import { TopBarProvider } from '../Structure';
import Routes from '../../routes';
import { UserProvider, InstitutionProvider } from '../../data';

function App() {
  return (
    <UserProvider>
      <InstitutionProvider>
        <TopBarProvider>
          <ToastProvider
            autoDismiss
            autoDismissTimeout={3000}
            placement="top-left"
          >
            <BrowserRouter>
              <Container>
                <Routes />
              </Container>
            </BrowserRouter>
          </ToastProvider>
        </TopBarProvider>
      </InstitutionProvider>
    </UserProvider>
  );
}

export default App;
