import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { Loader } from '../components/ui';
import '../shared/config/i18n/i18n';

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
}
