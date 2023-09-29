import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/Home';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
