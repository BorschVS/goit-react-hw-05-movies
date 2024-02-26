import styled from '@emotion/styled';
import { IoMdSearch } from 'react-icons/io';

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  position: relative;
`;

export const Search = styled.input`
  width: 300px;
  padding: 10px 26px;
  background-color: #353535;
  border: 2px solid #555555;
  border-radius: 4px;

  color: #f7eee8;

  &:focus {
    outline: none;
    border-color: #b94705;
  }
`;

export const SearchIcon = styled(IoMdSearch)`
  position: absolute;
  top: 12px;
  left: 8px;
`;
// ${Search}:focus-within & {
//     color: #b94705;
//   }
export const SearchButton = styled.button`
  position: absolute;
  height: 100%;
  padding: 0 12px;
  right: 0;
  border: none;
  background-color: #b94705;
  color: #f7eee8;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;

  cursor: pointer;

  transition: background 250ms ease-in-out;

  &:hover {
    background-color: #e05200;
  }

  &:active {
    background-color: #555555;
  }
`;
