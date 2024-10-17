import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Pillars, Creatives } from "./pages/AllPages";
import Header from "./components/Header";
import NotFound from './components/NotFound';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pillars/' element={<Pillars />} />
        <Route path='/creatives/' element={<Creatives />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <div id="popup-root"></div> {/* Contenedor para los popups */}
    </>
  );
}

export default App;