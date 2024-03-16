import { StyledHeader, List, Item, Link } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <List>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="movies">Movies</Link>
          </Item>
        </List>
      </nav>
    </StyledHeader>
  );
};

export default Header;
