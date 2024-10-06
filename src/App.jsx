import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/AllPages";
import Header from "./components/Header";
import NotFound from './components/NotFound';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <div id="popup-root"></div> {/* Contenedor para los popups */}
    </>
  );
}

export default App;