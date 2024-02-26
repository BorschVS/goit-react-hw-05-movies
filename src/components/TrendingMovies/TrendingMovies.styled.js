import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  75% {
    opacity: 0.5;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const List = styled.div`
  animation: ${slideInFromBottom} 0.5s ease-out; /* Применяем анимацию снизу */

  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  padding-top: 10px;

  position: relative;
  overflow: hidden;
`;

export const Item = styled.li`
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`;
