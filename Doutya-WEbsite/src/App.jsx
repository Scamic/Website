import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavBar from "./components/Nav";
import HomePage from "./components/HomePage";
import AboutUs from "./components/about";
import ProductSection from './components/products'; // Ensure the correct path
import Blog from './components/Blog';
import Footer from './components/Footer';
import CareerSection from './components/Careers';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false, // Set to false to animate every time you scroll up/down
        });
    }, []);

    return (
        <div className="App">
            <NavBar />
            <HomePage />
            <AboutUs />
            <ProductSection />
             <CareerSection/>
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
