import { lazy, Suspense } from 'react';
import { MainLayout } from '../../components/layout';
import Home from '../../pages/Home/Home';
import { Loader } from '../../components/ui';

const SellerLazy = lazy(() => import('../../pages/Seller/Seller.jsx'));
const UserProfileLazy = lazy(() => import('../../pages/UserProfile/UserProfile.jsx'));
const LiveProfileLazy = lazy(() => import('../../pages/LiveProfile/LiveProfile.jsx'));
const UpcomingProfileLazy = lazy(() => import('../../pages/UpcomingProfile/UpcomingProfile.jsx'));
const ProductPageLazy = lazy(() => import('../../pages/ProductPage/ProductPage.jsx'));
const ContactLazy = lazy(() => import('../../pages/Contact/Contact.jsx'));
const InvestorLazy = lazy(() => import('../../pages/Investor/Investor.jsx'));
const VideoProfileLazy = lazy(() => import('../../pages/VideoProfile/VideoProfile.jsx'));
const ShortProfileLazy = lazy(() => import('../../pages/ShortProfile/ShortProfile.jsx'));
const BuyerLazy = lazy(() => import('../../pages/Buyer/Buyer.jsx'));
const AiFeaturesLazy = lazy(() => import('../../pages/AiFeatures/AiFeatures.jsx'));
const LoginLazy = lazy(() => import('../../pages/Login/Login.jsx'));

const Loadable = (Component) => (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

const Seller = Loadable(SellerLazy);
const Login = Loadable(LoginLazy);
const Buyer = Loadable(BuyerLazy);
const AiFeatures = Loadable(AiFeaturesLazy);
const Investor = Loadable(InvestorLazy);
const Contact = Loadable(ContactLazy);
const UserProfile = Loadable(UserProfileLazy);
const LiveProfile = Loadable(LiveProfileLazy);
const UpcomingProfile = Loadable(UpcomingProfileLazy);
const VideoProfile = Loadable(VideoProfileLazy);
const ProductPage = Loadable(ProductPageLazy);
const ShortProfile = Loadable(ShortProfileLazy);

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
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
