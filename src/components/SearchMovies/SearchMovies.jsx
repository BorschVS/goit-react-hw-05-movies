// import { useSearchParams } from 'react-router-dom';
import {
  SearchWrapper,
  Label,
  Search,
  SearchButton,
} from './SearchMovies.styled';
import { SearchIcon } from './SearchMovies.styled';
import { useState } from 'react';

const SearchMovies = ({ updateQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchWrapper>
      <Label>
        <Search
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.currentTarget.value)}
        />
        <SearchIcon />
        <SearchButton onClick={() => updateQuery(searchQuery)} type="button">
          Search
        </SearchButton>
      </Label>
    </SearchWrapper>
  );
};

export default SearchMovies;
