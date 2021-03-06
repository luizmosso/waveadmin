import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../Theme';
import styled, { css } from 'styled-components';

const StyledIcon = styled.svg`
  ${({ mr, position, top, left, bottom, right, pointer }) => css`
    ${mr &&
    css`
      margin-right: ${mr}px;
    `}
    ${position &&
    css`
      position: ${position};
    `}
    ${top &&
    css`
      top: ${top};
    `}
    ${left &&
    css`
      left: ${left};
    `}
    ${right &&
    css`
      right: ${right};
    `}
    ${bottom &&
    css`
      bottom: ${bottom};
    `}
    ${pointer &&
    css`
      cursor: pointer;
    `}
  `}
`;

const VisibilityOffIcon = (props) => {
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
      <path
        d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"
        fill="none"
      />
      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
    </StyledIcon>
  );
};

VisibilityOffIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

VisibilityOffIcon.defaultProps = {
  color: colors.regular,
  width: 24,
};

export default VisibilityOffIcon;
