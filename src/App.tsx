import {
  createBrowserRouter as BrowserRouter,
  RouterProvider,
  createRoutesFromElements as Routes,
  Route,
} from "react-router-dom";

import Root from "./routes/Root";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

const router = BrowserRouter(
  Routes(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
