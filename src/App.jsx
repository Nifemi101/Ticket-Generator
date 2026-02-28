import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/mainlayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Registerpage from "./pages/Registerpage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<Registerpage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
