import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function MainContent(props) {
  const { children, ...rest } = props;
  return <Container {...rest}>{children}</Container>;
}

MainContent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainContent;
