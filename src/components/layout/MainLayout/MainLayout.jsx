import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../layout';

import './styles.css';

export const MainLayout = () => {
  return (
    <main className="layout-wrapper">
      <Header />

      <section className="main-content">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
};
