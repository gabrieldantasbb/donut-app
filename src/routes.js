import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Catalogo, Product, DonutsBar, FoodBike, SobreNos} from "./pages"

const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="catalogo" element={<Catalogo />}>
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path="donutsbar" element={<DonutsBar />} />
      <Route path="foodbike" element={<FoodBike />} />
      <Route path="sobrenos" element={<SobreNos />} />
    </Routes>
  );
};

export default MainRoutes;
