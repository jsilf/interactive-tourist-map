import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  //scroll to top when changing route
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};
