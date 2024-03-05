import TrendingMovies from 'components/TrendingMovies';
import { PageWrapper, Title } from './Home.styled';

const Home = () => {
  return (
    <PageWrapper>
      <Title>trending films today</Title>
      <TrendingMovies />
    </PageWrapper>
  );
};

export default Home;
