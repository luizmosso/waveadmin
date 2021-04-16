import styled from 'styled-components';
import { baseStyle as withBaseStyle, colors } from '../../components/Theme';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  height: 80vh;
  -webkit-box-shadow: 0px 2px 20px -4px ${colors.darkBlue};
  -moz-box-shadow: 0px 2px 20px -4px ${colors.darkBlue};
  box-shadow: 0px 2px 20px -4px ${colors.darkBlue};
`;

export const Form = styled.div`
  background: ${colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FieldsBase = styled.div`
  width: 100%;
`;
export const Fields = withBaseStyle(FieldsBase);

export const SubTitle = styled.p`
  font-family: Open Sans;
  color: ${colors.light};
`;
