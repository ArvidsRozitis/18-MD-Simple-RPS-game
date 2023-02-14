import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <div className="App">
      <nav className="nav__bar">
        <NavLink to="/" className="nav__item">
          Home
        </NavLink>
        <NavLink to="/game" className="nav__item">
          Play
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
