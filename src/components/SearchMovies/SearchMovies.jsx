import { SearchForm, Label, Search, SearchButton } from './SearchMovies.styled';
import { SearchIcon } from './SearchMovies.styled';
import { useState, useEffect } from 'react';

const SearchMovies = ({ query, updateQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateQuery(searchQuery);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Label>
        <Search type="text" value={searchQuery} onChange={handleChange} />
        <SearchIcon />
        <SearchButton type="submit">Search</SearchButton>
      </Label>
    </SearchForm>
  );
};

export default SearchMovies;
