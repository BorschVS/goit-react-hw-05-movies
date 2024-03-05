import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  75% {
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const List = styled.ul`
  animation: ${slideInFromBottom} 1s ease-in-out;

  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MoviesWrapper = styled.section`
  min-height: 400px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 20px * 4) / 4);
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`;

export const MovieThumb = styled.div`
  width: 280px;
  height: auto;
`;

export const Img = styled.img`
  width: 100%;
  display: block;

  object-fit: cover;

  background-color: #f8f8f8;
`;
