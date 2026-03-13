import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import MainLayout from "./layout/mainlayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Registerpage from "./pages/Registerpage";
import TicketPage from "./pages/TicketPage";

const App = () => {
  const [ticketData, setTicketData] = useState(null);

  const handleGenerateTicket = (data) => {
    setTicketData(data);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/register"
          element={<Registerpage generateTicket={handleGenerateTicket} />}
        />
        <Route
          path="/ticket"
          element={<TicketPage ticketData={ticketData} />}
        />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
