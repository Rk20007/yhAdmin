import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const CommonElement = () => {
  return (
    <>
      <Header />
      {(() => {
        if (1) {
          return (
            <SideBar>
              <Outlet />
            </SideBar>
          );
        } else {
          return <Outlet />;
        }
      })()}
    </>
  );
};

export default CommonElement;
