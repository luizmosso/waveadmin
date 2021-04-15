import styled, { css } from 'styled-components';
import { colors, baseStyle as withBaseStyle } from '../Theme';

const StyledButtonBase = styled.button`
  ${({ backgroundColor, color, plain }) => css`
    background-color: ${backgroundColor || colors.lightBlue};
    color: ${color || colors.white};
    border: none;
    border-radius: 3px;
    padding: 10px 10px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }

    ${plain
      ? css`
          background-color: ${backgroundColor || colors.white};
          color: ${color || colors.lightBlue};
          border: 1px solid ${color || colors.lightBlue};
        `
      : css`
          background-color: ${backgroundColor || colors.lightBlue};
          color: ${color || colors.white};
        `}
  `}
`;

export const StyledButton = withBaseStyle(StyledButtonBase);
