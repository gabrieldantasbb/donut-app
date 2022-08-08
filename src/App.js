import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import {Header, Footer} from "./components";
import MainRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <MainRoutes />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
