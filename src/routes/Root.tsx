import { Outlet } from "react-router-dom";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import PreLoader from "../common/PreLoader";

const RootLayout: React.FC = () => {
  return (
    <PreLoader>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex grow flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </PreLoader>
  );
};

export default RootLayout;
