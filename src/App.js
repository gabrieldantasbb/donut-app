import React from 'react';
import { BrowserRouter, 
        Route, 
        Routes,
        Link } from 'react-router-dom';
import './styles/globals.css';
import { Home, Catalogo, DonutsBar, FoodBike, Product, SobreNos } from './pages';


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/donutsbar" element={<DonutsBar />} />
                    <Route path="/foodbike" element={<FoodBike />} />
                    <Route path="/sobrenos" element={<SobreNos />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;