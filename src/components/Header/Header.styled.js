import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  border: 2px solid #fcff00;

  margin-bottom: 40px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  flex-basis: calc((100% - 30% * 2) / 2);
  transition: border 250ms ease-in-out, transform 250ms ease-in-out,
    background-color 250ms ease-in-out, color 1s ease-in-out;

  border-left: 2px solid #fcff00;
  border-right: 2px solid #fcff00;

  &:first-of-type {
    border-right: 1px solid #fcff00;
  }

  &:nth-of-type(n + 2) {
    border-left: 1px solid #fcff00;
  }

  &:hover {
    background-color: #fcff00;
    transform: scale(1.02);
  }

  &:active {
    background-color: #fcff00;
    border-color: #fcff00;

    transform: scale(1);
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  color: white;
  padding: 20px 20px;
  text-decoration: none;
  text-transform: uppercase;

  transition: color 250ms ease-in-out, letter-spacing 250ms ease-in-out;

  &:hover {
    letter-spacing: 0.06em;
    color: #323232;
  }
`;
