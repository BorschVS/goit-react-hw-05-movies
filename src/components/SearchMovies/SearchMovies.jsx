// import { useSearchParams } from 'react-router-dom';
import { Form, Label, Search, SearchButton } from './SearchMovies.styled';
import { SearchIcon } from './SearchMovies.styled';

const SearchMovies = () => {
  // [searchParams, setSearchParams] = useSearchParams();

  return (
    <Form>
      <Label>
        <Search type="text" onChange={e => e.target.value} />
        <SearchIcon />
        <SearchButton type="button">Search</SearchButton>
      </Label>
    </Form>
  );
};

export default SearchMovies;
