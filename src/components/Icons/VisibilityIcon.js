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

const VisibilityIcon = (props) => {
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
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </StyledIcon>
  );
};

VisibilityIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

VisibilityIcon.defaultProps = {
  color: colors.regular,
  width: 24,
};

export default VisibilityIcon;
