import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ProtectedRoutes from './utils/ProtectedRoutes.jsx';

import './App.css'

const Home = lazy(() => import('./pages/Home.jsx'))
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <Navbar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>

          <Route path="/" element={
            <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
              <LandingPage />
            </ErrorBoundary>} />

          <Route element={<ProtectedRoutes />}>

            <Route path="/home" element={
              <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
                <Home />
              </ErrorBoundary>
            } />

          </Route>
        </Routes>
      </Suspense>

    </QueryClientProvider>
  )
}

export default App