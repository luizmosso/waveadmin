import styled from 'styled-components';
import { colors } from '../../components/Theme';
const { dark: darkColor } = colors;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Field = styled.p`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: 24px;
  width: fit-content;
  input {
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    font-size: 24px;
    border: none;
    background-color: transparent;
    padding: 0;
    outline: none;
    ${({ dark }) => dark && `color: ${darkColor};`}
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 1;
  }
`;
