import React from 'react';
import './styles/globals.css'
import {Home, Donut_info} from './pages'
import { Header, Footer } from './components';

const App = () => {
    return (
        <>
                <Header/>
                <Donut_info/>
                <Footer/>
        </>
    )
}

export default App;