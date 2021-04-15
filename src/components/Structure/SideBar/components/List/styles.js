import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../../../Theme';
const { light, lighter } = colors;

export const StyledList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.2rem;
  ${({ my }) =>
    my &&
    css`
      margin-top: ${my}px;
      margin-bottom: ${my}px;
    `}
`;

export const ListTitle = styled.p`
  color: ${lighter};
  font-size: 0.7rem;
`;

export const ListItemText = styled.p`
  color: ${light};
  font-size: 0.9rem;
`;

export const StyledListItem = styled.div`
  ${({ onlyIcons }) =>
    onlyIcons &&
    css`
      margin-top: 1.6rem;
      margin-bottom: 1.6rem;
    `}
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 0.4rem;
  text-decoration: none;
`;
