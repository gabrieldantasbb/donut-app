import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import { Header } from "./components";
import MainRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <MainRoutes/>
      </div>
    </BrowserRouter>
  );
};

export default App;
