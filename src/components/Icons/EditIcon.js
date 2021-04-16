import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../Theme';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  ${({ mr }) => mr && `margin-right : ${mr}px;`}
`;

const EditIcon = (props) => {
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
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </StyledIcon>
  );
};

EditIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

EditIcon.defaultProps = {
  color: colors.regular,
  width: 24,
};

export default EditIcon;
