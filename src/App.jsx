import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import ProductDetail from './pages/ProductDetail'
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services/:id" element={<ServiceDetail />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                    </Routes>
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    )
}

// Helper component to scroll to top on route change
function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Scroll to the specific section if there's a hash
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    const yOffset = -80; // offset for the fixed navbar
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Otherwise, jump to top when path changes
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [pathname, hash]);

    return null;
}

export default App
