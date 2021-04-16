import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Spinner from '../Spinner';
import { CloseIcon } from '../Icons';
import {
  Container,
  Background,
  StyledModal,
  Header,
  Footer,
  Content,
} from './styles';

function Modal(props) {
  const { show, header, children, footer, onClose, large } = props;

  const FooterComponent = () => {
    const { onAction, onDiscard, actionTitle, loading } = footer;
    return (
      <Footer>
        <Button mr="0.4rem" plain onClick={onDiscard}>
          Cancel
        </Button>
        <Button onClick={onAction}>
          {loading ? <Spinner height="16px" /> : actionTitle || 'Create'}
        </Button>
      </Footer>
    );
  };

  return show ? (
    <Container>
      <Background />
      <StyledModal large={large}>
        {header && (
          <Header>
            <CloseIcon
              position="absolute"
              top="0.8rem"
              right="0.8rem"
              pointer
              onClick={onClose}
            />
            {header}
          </Header>
        )}
        <Content>{children}</Content>
        {footer && <FooterComponent />}
      </StyledModal>
    </Container>
  ) : null;
}

Modal.propTypes = {
  show: PropTypes.bool,
  large: PropTypes.bool,
  header: PropTypes.oneOfType([PropTypes.any]),
  footer: PropTypes.oneOfType([PropTypes.any]),
  children: PropTypes.oneOfType([PropTypes.any]),
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  show: false,
  large: false,
  header: null,
  footer: null,
  children: null,
  onClose: () => {},
};

export default Modal;
