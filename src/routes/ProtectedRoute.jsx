import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ Component }) => {
  const nav = useNavigate();
  useEffect(() => {
    const isLogin = Cookies.get("YH_admin_token");
    if (!isLogin) {
      nav("/");
    }
    if (Cookies.get("YH_admin_token") && window.location.pathname === "/") {
      nav("/admin/secure/home");
    }
    // if (window.location.pathname === "/") {
    //   nav("/admin/secure/home");
    // }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
