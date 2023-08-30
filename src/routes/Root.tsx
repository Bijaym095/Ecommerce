import { Outlet } from "react-router-dom";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const RootLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex grow flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
