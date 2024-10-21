import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Pillars, Creatives, Impact, Consortium } from "./pages/AllPages";
import Header from "./components/Header";
import NotFound from './components/NotFound';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/impact/' element={<Impact />} />
        <Route path='/pillars/' element={<Pillars />} />
        <Route path='/creatives/' element={<Creatives />} />
        <Route path='/consortium/' element={<Consortium />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <div id="popup-root"></div> {/* Contenedor para los popups */}
    </>
  );
}

export default App;