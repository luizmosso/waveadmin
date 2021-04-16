import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../Theme';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  ${({ mr }) => mr && `margin-right : ${mr}px;`}
`;

const ChartIcon = (props) => {
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
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
    </StyledIcon>
  );
};

ChartIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

ChartIcon.defaultProps = {
  color: colors.regular,
  width: 24,
};

export default ChartIcon;
