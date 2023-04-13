import {
  createBrowserRouter as BrowserRouter,
  RouterProvider,
  createRoutesFromElements as Routes,
  Route,
} from "react-router-dom";

import Root from "./routes/Root";
// import Home from "./pages/Home";

// import Home from "./pages/Home";

const router = BrowserRouter(
  Routes(<Route path="/" element={<Root />}></Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
