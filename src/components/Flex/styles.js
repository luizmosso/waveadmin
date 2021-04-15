import styled, { css } from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  ${({ width, alignItems, justifyContent, flexWrap, margin }) => css`
    width: ${width || '100%'};
    align-items: ${alignItems || 'center'};
    justify-content: ${justifyContent || 'center'};
    flex-wrap: ${flexWrap || 'wrap'};
    margin: ${margin || 'unset'};
  `}
`;
