import styled from 'styled-components';
import { colors, baseStyle as withBaseStyle } from '../Theme';
const { white, lighter } = colors;

const ContainerBase = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Container = withBaseStyle(ContainerBase);

export const StyledInput = styled.input`
  background: ${white};
  border: 1px solid ${lighter};
  border-radius: 3px;
  height: 40px;
  padding-left: 0.8rem;
`;

export const Label = styled.label`
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
`;

export const Error = styled.p`
  color: red;
  font-size: 0.8rem;
`;
