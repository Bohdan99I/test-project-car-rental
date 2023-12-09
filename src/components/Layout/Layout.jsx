import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/*<Header /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
