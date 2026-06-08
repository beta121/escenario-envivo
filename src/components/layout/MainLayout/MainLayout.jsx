import { Outlet, useLocation } from 'react-router-dom';
import { HeaderMain, HeaderAi } from '../../layout/Headers';
import { HeaderProvider } from '../../../shared/context/HeaderContext';
import { Footer } from '../../layout';
import { ScrollToTop } from '../../../shared/helpers';

import './styles.css';

export const MainLayout = () => {
  const location = useLocation();

  const isAIFeaturesPage = location.pathname.startsWith('/investor');
  const isFooter = location.pathname.startsWith('/short');

  return (
    <HeaderProvider>
      <main className="layout-wrapper">
        <ScrollToTop />

        {isAIFeaturesPage ? <HeaderAi /> : <HeaderMain />}

        <section className="main-content" style={{ paddingLeft: isAIFeaturesPage ? '' : '16px' }}>
          <Outlet />
        </section>

        {!isFooter && <Footer />}
      </main>
    </HeaderProvider>
  );
};
