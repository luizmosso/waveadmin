import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const IconContainer = styled.div`
  ${({ mr }) => mr && `margin-right : ${mr}px;`}
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  :hover {
    background: #d6d1d1;

    ${({ tooltip }) =>
      tooltip &&
      css`
        ::after {
          content: '${tooltip}';
          color: white;
          background: black;
          position: absolute;
          top: -30px;
          left: -10px;
          padding: 3px 5px;
          border-radius: 3px;
          font-size: 0.7rem;
        }
      `}
  }
`;
