import React, { useEffect } from "react";
import { usegetTitleFromRoute } from "../../hooks/usegetTitleFromRoute";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{usegetTitleFromRoute(location.pathname)}</title>
      </Helmet>
      <div className="DashboardLayout">
        <div className='DashboardLayout_Cover' >
          <div className='out_Sidebar'>
              <SideBar />

          </div>
          <div className={`DashboardLayout_Body`} id='DashboardLayout_Body'>
            <Header />
            <div className='Layout_Children'>
              {children}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
