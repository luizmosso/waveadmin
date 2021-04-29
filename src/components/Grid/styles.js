import styled, { css } from 'styled-components';
import { colors } from '../Theme';
const { light, bright } = colors;

export const StyledGrid = styled.div`
  width: 100%;
  overflow-x: auto;
  max-width: 1000px;
`;

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  &:nth-child(odd) {
    border-top: 1px solid ${bright};
    border-bottom: 1px solid ${bright};
  }
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    > div:first-child {
      border-top-left-radius: 5px;
    }

    > div:last-child {
      border-top-right-radius: 5px;
    }
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    > div:first-child {
      border-bottom-left-radius: 5px;
    }

    > div:last-child {
      border-bottom-right-radius: 5px;
    }
  }

  ${({ header }) =>
    css`
      color: ${light};
      ${header && 'font-weight: bold'};
    `}
`;

export const StyledColumn = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;
