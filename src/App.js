import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navigation } from './components/Navigation';
import { Cart } from "./components/Cart";

import { Home } from './pages/Home';
import { About } from "./pages/About";
import { Pokemon } from './pages/Pokemon';
import { Contact } from './pages/Contact';

import './assets/scss/App.scss';
import './assets/scss/Cart.scss';
import { useFloatingCart } from "./hooks/useFloatingCart.hook";

function App() {
  const {cartOpened} = useFloatingCart();

  return (
    <div className={`App ${cartOpened ? 'cart-opened' : ''}`}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
        <Cart />
      </BrowserRouter>
    </div>
  );
}

export default App;
