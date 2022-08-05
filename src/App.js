import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import { Header } from "./components";
import MenuMobile from "./components/Navbar/MobileNavigation";
import MainRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="menuMobile">
          <MenuMobile/>
        </div>
        <MainRoutes/>
      </div>
    </BrowserRouter>
  );
};

export default App;
