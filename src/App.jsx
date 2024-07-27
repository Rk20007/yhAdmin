import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

const CommonElement = () => {
  return (
    <>
      <Header />
      {(() => {
        if (Cookies.get("YH_admin_token")) {
          return (
            <SideBar>
              <Outlet />
            </SideBar>
          );
        } else {
          return <Outlet />;
        }
      })()}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default CommonElement;
