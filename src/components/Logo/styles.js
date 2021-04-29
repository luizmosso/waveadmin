/* eslint-disable operator-linebreak */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../Theme';

export const Container = styled.div`
  font-family: 'Mansalva', cursive;
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ my }) => my && `margin-top : ${my}px; margin-bottom : ${my}px;`};
  position: relative;

  &::after {
    content: 'DASHBOARD';
    background: red;
    color: white;
    position: absolute;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.6rem;
    padding: 1px 3px;
    font-weight: bold;
    bottom: -16px;
    ${({ onlyIcon }) => !onlyIcon && 'margin-left: 60px;'};
    border-radius: 3px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.regular};
`;
