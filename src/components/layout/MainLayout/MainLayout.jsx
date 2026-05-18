import { Outlet, useLocation } from 'react-router-dom';
import { HeaderMain, HeaderAi } from '../../layout/Headers';
import { Footer } from '../../layout';
import ScrollToTop from '../../../shared/hooks/ScrollToTop';

import './styles.css';

export const MainLayout = () => {
  const location = useLocation();

  const isAIFeaturesPage = location.pathname.startsWith('/investor');

  return (
    <main className="layout-wrapper">
      <ScrollToTop />

      {isAIFeaturesPage ? <HeaderAi /> : <HeaderMain />}

      <section className="main-content">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};
