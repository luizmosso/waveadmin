import styled, { css } from 'styled-components';
import { baseStyle as withBaseStyle } from '../Theme';

export const StyledFlexBase = styled.div`
  display: flex;
  ${({ width, alignItems, justifyContent, flexWrap, margin }) => css`
    width: ${width || '100%'};
    align-items: ${alignItems || 'center'};
    justify-content: ${justifyContent || 'center'};
    flex-wrap: ${flexWrap || 'wrap'};
    margin: ${margin || 'unset'};
  `}
`;

export const StyledFlex = withBaseStyle(StyledFlexBase);
