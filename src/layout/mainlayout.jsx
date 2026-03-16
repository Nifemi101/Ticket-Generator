import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const mainlayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default mainlayout;
