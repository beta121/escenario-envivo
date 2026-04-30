import { Outlet, useLocation } from 'react-router-dom';
import { HeaderMain, HeaderAi } from '../../layout/Headers';
import { Footer } from '../../layout';

import './styles.css';

export const MainLayout = () => {
  const location = useLocation();

  const isAIFeaturesPage = location.pathname.startsWith('/ai-feature');

  return (
    <main className="layout-wrapper">
      {isAIFeaturesPage ? <HeaderAi /> : <HeaderMain />}

      <section className="main-content">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};
