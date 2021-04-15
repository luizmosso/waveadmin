import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../Theme';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  ${({ mr }) => mr && `margin-right : ${mr}px;`}
  cursor: pointer;
`;

const MenuIcon = (props) => {
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
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </StyledIcon>
  );
};

MenuIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

MenuIcon.defaultProps = {
  color: colors.regular,
  width: 24,
};

export default MenuIcon;
