import styled from '@emotion/styled/macro';
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
  transition: transform 250ms ease-in-out, filter 250ms ease-in-out;

  &:hover {
    transform: scale(1.04);
    filter: brightness(70%);
  }
`;

export const MovieThumb = styled.div`
  position: relative;

  width: 280px;
  height: auto;
  overflow: hidden;
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff; /* Цвет текста */
  transition: transform 0.3s ease-in-out;
  transform: translateY(100%);
  overflow: hidden;
  visibility: hiiden;

  ${MovieThumb}:hover & {
    transform: translateY(0);
  }
`;

export const Img = styled.img`
  width: 100%;
  display: block;

  object-fit: cover;

  background-color: #f8f8f8;
  transition: filter 0.3s ease-in-out; /* Анимация для фильтра при наведении */
`;

export const Accent = styled.span`
  color: #fcff00;
  text-transform: uppercase;
  font-weigth: 500;
`;

export const Title = styled.h2`
  padding: 0 8px;
  margin: 8px 0;
  font-size: 24px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  padding: 0 8px;
  margin: 0 4px;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const UpperText = styled.span`
  text-transform: uppercase;
`;
