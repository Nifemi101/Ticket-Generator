import { Outlet } from "react-router-dom";
import Header from "../components/header";

const mainlayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default mainlayout;
