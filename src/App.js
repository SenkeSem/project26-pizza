import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/Home';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
