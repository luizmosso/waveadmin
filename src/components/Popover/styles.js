import styled from 'styled-components';
import { colors, baseStyle as withBaseStyle } from '../Theme';
const { white, lighter, regular } = colors;

const ContainerBase = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Container = withBaseStyle(ContainerBase);

export const StyledPopover = styled.div`
  background: ${white};
  border-radius: 5px;
  height: 40px;
  margin-top: 0.8rem;

  ${({ open }) => open && `border: 1px solid ${lighter};`}

  &:hover {
    border: 1px solid ${lighter};
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 0.8rem;
`;

export const Item = styled.div`
  background: ${white};
  border-radius: 3px;
  height: 40px;
  cursor: pointer;
  width: 100%;
  color: ${regular};
  font-size: 0.9rem;
  font-weight: bold;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  &:hover {
    border: 1px solid ${lighter};
    position: relative;
    &::after {
      content: '▼';
      position: absolute;
      right: 5px;
    }
  }
`;
