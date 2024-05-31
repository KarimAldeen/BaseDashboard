import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../components/app/Layout";
import { CrudRoute, menuItems } from "./Routes";
import { Spin } from "antd";
import useAuthState from "../state/AuthState";
import { useChangeLanguage } from "../hooks/useChangeLanguage";

const Page404 = lazy(() => import("./NotFoundPage"));
// const Auth = lazy(() => import("./Pages/Auth/Page"));

const App = () => {
  const { changeLanguage } = useChangeLanguage();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthState();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  const renderRouteElement = (route: any) => (
    <Suspense fallback={<Spin />}>
      {route.header ? (
        <Layout>{route.element}</Layout>
      ) : (
        route.element || <h1>please Create the Page</h1>
      )}
    </Suspense>
  );

  const renderRoutesRecursively = (routes: any) =>
    routes.map((route: any) => {
      const useAbility = true

      if (useAbility) {
        return (
          <React.Fragment key={route.path}>
            <Route path={route.path} element={renderRouteElement(route)} />
            {route.children && renderRoutesRecursively(route.children)}
          </React.Fragment>
        );
      }
      return null;
    });

  return (
    <Routes>
      {/* <Route
        key={"auth"}
        path={"/auth"}
        element={
          <Suspense fallback={<Spin />}>
            {" "}
            <Auth />{" "}
          </Suspense>
        }
      /> */}
      <Route
        key={"Page404"}
        path={"/*"}
        element={
          <Suspense fallback={<Spin />}>
            {" "}
            <Page404 />{" "}
          </Suspense>
        }
      />

      {renderRoutesRecursively(menuItems)}

      {CrudRoute.map((route) => {
        const useAbility = true
        if (!useAbility) {
          return false;
        }
        return (
          <Route
            key={route.path ?? ""}
            path={route.path ?? ""}
            element={renderRouteElement(route)}
          />
        );
      })}
    </Routes>
  );
};

export default App;
