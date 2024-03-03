import styled from '@emotion/styled';
import { IoMdSearch } from 'react-icons/io';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  position: relative;
`;

export const Search = styled.input`
  width: 300px;
  padding: 10px 26px;
  background-color: #323232;
  border: 2px solid #b4b7b9;
  border-radius: 4px;

  color: #f7eee8;

  &:focus {
    outline: none;
    border-color: #fcff00;
  }
`;

export const SearchIcon = styled(IoMdSearch)`
  position: absolute;
  top: 12px;
  left: 8px;
`;

export const SearchButton = styled.button`
  position: absolute;
  height: 100%;
  padding: 0 12px;
  right: 0;

  border: 2px solid #00000000;
  background-color: #00000000;
  color: #b4b7b9;
  border-left: 2px solid #b4b7b9;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;

  cursor: pointer;

  text-transform: uppercase;
  transition: background 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;

  &:focus {
    background-color: #fcff00;
    color: #323232;
  }

  &:hover {
    background-color: #fcff00;
    color: #323232;
  }

  &:active {
    background-color: #55555500;
    color: #fcff00;
  }
`;
