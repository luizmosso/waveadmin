import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../Theme';
import styled from 'styled-components';
const StyledIcon = styled.svg`
  ${({ mr }) => mr && `margin-right : ${mr}px;`}
`;

const LogoutIcon = (props) => {
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
      <g>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z" />
      </g>
    </StyledIcon>
  );
};

LogoutIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

LogoutIcon.defaultProps = {
  color: colors.regular,
  width: 24,
};

export default LogoutIcon;
