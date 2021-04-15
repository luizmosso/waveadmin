import styled from 'styled-components';
import { colors } from '../Theme';
const { darkShadow, white, lighter, pale, regular } = colors;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${darkShadow};
  z-index: 10;
`;
export const StyledModal = styled.div`
  max-width: ${({ large }) => (large ? '800px' : '400px')};
  width: 100%;
  min-height: 100px;
  background: ${white};
  position: absolute;
  z-index: 11;
  border-radius: 3px;
`;

export const Header = styled.div`
  border-bottom: 1px solid ${lighter};
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
`;

export const Footer = styled.div`
  border-top: 1px solid ${lighter};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.8rem;
`;

export const Content = styled.div`
  padding: 1.6rem;
  background: ${pale};
  color: ${regular};
`;
