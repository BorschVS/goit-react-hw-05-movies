import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader';
import Container from 'components/Container';
import Header from 'components/Header';

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
