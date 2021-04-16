import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: white;
  height: 100%;
  width: ${({ fitBar, isMobile }) =>
    fitBar ? '80px' : !isMobile ? '300px' : '220px'};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
  ${({ floatingSideBarVisible }) =>
    floatingSideBarVisible &&
    css`
      position: absolute;
      top: 70px;
      height: calc(100% - 70px);
    `}
`;
