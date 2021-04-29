import styled from 'styled-components';
import { colors } from '../../../components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const ReportBox = styled.div`
  height: 100%;
  max-height: 55vh;
  width: 100%;
  display: flex;
  overflow: auto;
  justify-content: center;
`;

export const Title = styled.h3`
  margin-left: 1.6rem;
  color: ${colors?.regular};
  font-weight: 500;
`;
