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

const CloseIcon = (props) => {
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
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </StyledIcon>
  );
};

CloseIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

CloseIcon.defaultProps = {
  color: colors.regular,
  width: 24,
};

export default CloseIcon;
