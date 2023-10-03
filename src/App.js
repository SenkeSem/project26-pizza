import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/Home';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
