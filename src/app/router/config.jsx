import { lazy, Suspense } from 'react';
import { MainLayout } from '../../components/layout';
import Home from '../../pages/Home/Home';

const Seller = lazy(() => import('../../pages/Seller/Seller.jsx'));
const UserProfile = lazy(() => import('../../pages/UserProfile/UserProfile.jsx'));
const LiveProfile = lazy(() => import('../../pages/LiveProfile/LiveProfile.jsx'));
const UpcomingProfile = lazy(() => import('../../pages/UpcomingProfile/UpcomingProfile.jsx'));
const ProductPage = lazy(() => import('../../pages/ProductPage/ProductPage.jsx'));
const Contact = lazy(() => import('../../pages/Contact/Contact.jsx'));
const Investor = lazy(() => import('../../pages/Investor/Investor.jsx'));
const VideoProfile = lazy(() => import('../../pages/VideoProfile/VideoProfile.jsx'));
const ShortProfile = lazy(() => import('../../pages/ShortProfile/ShortProfile.jsx'));
const Buyer = lazy(() => import('../../pages/Buyer/Buyer.jsx'));
const AiFeatures = lazy(() => import('../../pages/AiFeatures/AiFeatures.jsx'));

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
        path: '/buyer',
        element: <Buyer />,
      },
      {
        path: '/ai-features',
        element: <AiFeatures />,
      },
      {
        path: '/investor',
        element: <Investor />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/user/:id',
        element: <UserProfile />,
      },
      {
        path: '/live/:id',
        element: <LiveProfile />,
      },
      {
        path: '/upcoming/:id',
        element: <UpcomingProfile />,
      },
      {
        path: '/video/:id',
        element: <VideoProfile />,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
      {
        path: '/shorts/:id',
        element: <ShortProfile />,
      },
    ],
  },
];
