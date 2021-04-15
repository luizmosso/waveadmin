import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../Theme';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  ${({ mr }) => mr && `margin-right : ${mr}px;`}
`;

const DeleteIcon = (props) => {
  const { color, width, ...rest } = props;
  return (
    <StyledIcon
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill={color}
      {...rest}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </StyledIcon>
  );
};

DeleteIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

DeleteIcon.defaultProps = {
  color: colors.regular,
  width: 24,
};

export default DeleteIcon;
