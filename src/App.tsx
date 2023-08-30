import {
  createBrowserRouter as BrowserRouter,
  RouterProvider,
  createRoutesFromElements as Routes,
  Route,
} from "react-router-dom";

import Root from "./routes/Root";
import PrivateRoute from "./routes/PrivateRoute";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import PageNotFound from "./pages/PageNotFound";

const router = BrowserRouter(
  Routes(
    <Route element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />

      <Route element={<PrivateRoute />}>
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
