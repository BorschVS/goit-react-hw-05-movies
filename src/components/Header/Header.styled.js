import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: #b94705;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  flex-basis: calc((100% - 30% * 2) / 2);
  transition: border 250ms ease-in-out, transform 250ms ease-in-out,
    background-color 250ms ease-in-out;

  border: 2px solid #353535;
  &:first-of-type {
    border-right: 1px solid #353535;
  }
  &:nth-of-type(n + 2) {
    border-left: 1px solid #353535;
  }

  &:hover {
    background-color: #353535;
    transform: scale(1.02);
  }

  &:active {
    background-color: #1f1f1f;
    border-color: #1f1f1f;

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
  &:visited {
    color: white;
  }
`;
