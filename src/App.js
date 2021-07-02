import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LogoImage from "./assets/image/logo.png";
import ThemeContextProvider from "./themeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Tema3 = lazy(() => import("./tema3/Tema3"));

const LoadingComponent = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={LogoImage} alt="logo" width={54} style={{ margin: 10 }} />
      Loading...
    </div>
  );
};

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  return (
    <Switch>
      <Route path="/:name?">
        <Suspense fallback={<LoadingComponent />}>
          <ThemeContextProvider>
            <Tema3 />
          </ThemeContextProvider>
        </Suspense>
      </Route>
    </Switch>
  );
}
