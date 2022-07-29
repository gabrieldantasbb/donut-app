import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Catalogo, DonutsBar, FoodBike, SobreNos, Product} from "./pages"

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="catalogo" element={<Catalogo />}/>
      <Route path="/donut/:slug" element={<Product/>} />
      <Route path="donutsbar" element={<DonutsBar />} />
      <Route path="foodbike" element={<FoodBike />} />
      <Route path="sobrenos" element={<SobreNos />} />
      
    </Routes>
  );
};

export default MainRoutes;
