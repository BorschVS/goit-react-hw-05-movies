import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 40px;
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

  margin: 20px 0;

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

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 20px * 2) / 3);
`;

export const IconWrapper = styled.span`
  transform: scale(1.2);
`;
