import styled, { css } from 'styled-components';
import { colors } from '../Theme';
const {
  success: successColor,
  error: errorColor,
  successBackground,
  errorBackground,
  regular,
} = colors;

export const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  min-height: 70px;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);

  ${({ success }) => css`
    border-top: 3px solid ${success ? successColor : errorColor};
    background: ${success ? successBackground : errorBackground};
  `};
`;

export const Content = styled.div`
  width: 100%;
  margin-left: 1.6rem;
  margin-right: 1.6rem;
  color: ${regular};
`;
