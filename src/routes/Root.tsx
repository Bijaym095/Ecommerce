import { FC } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const RootLayout: FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
