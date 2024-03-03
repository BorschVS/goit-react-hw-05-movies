import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const Text = styled.p`
  word-spacing: 2px;
  line-height: 1.4;
`;

export const Title = styled.h1`
  margin: 0;

  text-transform: uppercase;
  align-self: center;
  margin-bottom: 10px;
`;

export const Accent = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  color: #fcff00;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const PageWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 20px * 2) / 3);
`;

export const StyledLink = styled(NavLink)`
  max-width: 60px;
  text-align: right;

  display: flex;
  align-items: center;
  gap: 4px;

  padding: 6px 10px;
  border: none;
  background-color: transparrent;
  color: #fcff00;
  text-transform: uppercase;
  text-decoration: none;

  border: 2px solid #fcff00;

  transition: all 250ms ease-in-out;

  margin-bottom: 20px;

  &:hover {
    transform: scale(1.1);
    background-color: #fcff00;
    color: #323232;
  }

  &:active {
    transform: scale(0.9);
    background-color: transparent;
    color: #fcff00;
  }
`;

export const IconWrapper = styled.span`
  transform: scale(1.2);
`;

export const CastList = styled.ul`
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
`;

export const CastThumb = styled.div`
  width: 180px;
  height: 200px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;

export const MoviesWrapper = styled.li`
  display: flex;
  justify-content: row;
  gap: 40px;
  margin-top: 40px;
  &:first-of-type {
  }
`;
