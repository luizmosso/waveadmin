import React from 'react';
import styled from 'styled-components';
import { colors } from '../Theme';
const { success, error, warning } = colors;

const StyledBadge = styled.div`
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 3px;
  padding: 1px 3px;
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'success':
        return success;
      case 'error':
        return error;
      case 'warning':
        return warning;
      default:
        return success;
    }
  }};
`;

function Badge(props) {
  return <StyledBadge {...props} />;
}

export default Badge;
