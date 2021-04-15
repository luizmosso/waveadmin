import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 100px;
  width: 200px;
  background-color: #cedae8;
  height: 40px;
  margin-right: 1.6rem;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: #9aa8af;
  font-weight: bold;
  padding-left: 1rem;
  width: calc(100% - 1rem);
  outline: none;

  &::placeholder {
    color: #9aa8af;
    font-weight: normal;
  }
`;
