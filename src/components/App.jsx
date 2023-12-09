import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Catalog = lazy(() => import('../pages/Catalog'));
const Favorite = lazy(() => import('../pages/Favorite'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
