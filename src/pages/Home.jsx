import TrendingMovies from 'components/TrendingMovies';
import { Title } from './Pages.styled';

const Home = () => {
  return (
    <>
      <Title>trending films today</Title>
      <TrendingMovies />
    </>
  );
};

export default Home;
