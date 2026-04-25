import { lazy, Suspense } from 'react';
import { MainLayout } from '../../components/layout';
import Home from '../../pages/Home/Home';

const Seller = lazy(() => import('../../pages/Seller/Seller.jsx'));
const UserProfile = lazy(() => import('../../pages/UserProfile/UserProfile.jsx'));
const VideoProfile = lazy(() => import('../../pages/VideoProfile/VideoProfile.jsx'));
const UpcomingProfile = lazy(() => import('../../pages/UpcomingProfile/UpcomingProfile.jsx'));
const ProductPage = lazy(() => import('../../pages/ProductPage/ProductPage.jsx'));

const Loadable = (Component) => (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/seller',
        element: <Seller />,
      },
      {
        path: '/user/:id',
        element: <UserProfile />,
      },
      {
        path: '/live/:id',
        element: <VideoProfile />,
      },
      {
        path: '/upcoming/:id',
        element: <UpcomingProfile />,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
    ],
  },
];
