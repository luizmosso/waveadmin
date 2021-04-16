import styled from 'styled-components';
import { colors } from '../../Theme';
const { regular } = colors;

export const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin-left: 1.6rem;
  color: ${regular};
  font-weight: 500;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SearchBar = styled.div`
  border-radius: 100px;
  width: 200px;
  background-color: #cedae8;
  color: #9aa8af;
  height: 40px;
  margin-right: 1.6rem;
`;
