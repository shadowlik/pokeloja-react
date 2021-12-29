import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navigation } from './components/Navigation'
import { Home } from './pages/Home/Home';
import { Pokemon } from './pages/Pokemon';

import './assets/scss/App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="expenses" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
