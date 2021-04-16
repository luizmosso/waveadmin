import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: ${({ width }) => width || '40px'};
  height: ${({ height }) => height || '40px'};
  position: relative;
`;

const circleRotation = (index) => {
  if (index < 2) return '';
  const rotate = `${30 * (index - 1)}deg`;
  return css`
    -webkit-transform: rotate(${rotate});
    -ms-transform: rotate(${rotate});
    transform: rotate(${rotate});
  `;
};

const circleAnimationDelay = (index) => {
  if (index < 2) return '';
  const delay = `${-1.2 + parseFloat(`0.${index - 1}`)}s`;
  return css`
    -webkit-animation-delay: ${delay};
    animation-delay: ${delay};
  `;
};

const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  ${({ index }) => css`
    ${circleRotation(index)}
  `}

  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: white;
    border-radius: 100%;
    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
    ${({ index }) =>
      css`
        ${circleAnimationDelay(index)}
      `}
  }

  @-webkit-keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }

  @keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;

export default function Spinner(props) {
  return (
    <Container {...props}>
      {Array.from(Array(11).keys()).map((_, index) => (
        <Circle key={index} index={index + 1} />
      ))}
    </Container>
  );
}
