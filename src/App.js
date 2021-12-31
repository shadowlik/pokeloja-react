import { HashRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { Navigation } from './components/Navigation';
import { Cart } from "./components/Cart";
import { Sidebar } from './components/Sidebar';

import { Home } from './pages/Home';
import { About } from "./pages/About";
import { Pokemon } from './pages/Pokemon';
import { Contact } from './pages/Contact';

import './assets/scss/App.scss';
import './assets/scss/Cart.scss';
import { useEffect } from "react";
import { closeCart } from "./store";

function App() {
  const cartOpened = useSelector(state => state.cart.open);
  const dispatch = useDispatch();

  const keydown = (e) => {
    if (e.code === 'Escape') {
      dispatch(closeCart());
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keydown, true);
    return () => window.removeEventListener("keydown", keydown, true);
  });

  return (
    <div className={`App ${cartOpened ? 'cart-opened' : ''}`}>
      <HashRouter>
        <Navigation />
        <section className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
          </Routes>
          <Sidebar />
        </section>
        <Cart />
      </HashRouter>
    </div>
  );
}

export default App;
