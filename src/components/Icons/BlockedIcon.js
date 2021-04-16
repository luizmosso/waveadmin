import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../Theme';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  ${({ mr }) => mr && `margin-right : ${mr}px;`}
`;

const BlockedIcon = (props) => {
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
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" />
    </StyledIcon>
  );
};

BlockedIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

BlockedIcon.defaultProps = {
  color: colors.regular,
  width: 24,
};

export default BlockedIcon;
