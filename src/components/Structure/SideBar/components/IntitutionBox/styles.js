import styled, { css } from 'styled-components';
import { colors } from '../../../../Theme';
const { regular, lighter } = colors;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ my }) => my && `margin-top : ${my}px; margin-bottom : ${my}px;`}
`;

const imageDefaultCSS = css`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

export const NoImage = styled.div`
  ${imageDefaultCSS}
  background-color: #cedae8;
`;
export const Image = styled.img`
  ${imageDefaultCSS}
`;

export const Name = styled.p`
  width: 100%;
  color: ${regular};
  text-align: center;
  margin-bottom: 0;
  margin-top: 0.8rem;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const UserName = styled.p`
  width: 100%;
  color: ${lighter};
  text-align: center;
  margin-bottom: 0;
  margin-top: 0.8rem;
  font-size: 0.9rem;
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
