import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import "./i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const lngs = {
    en: { nativeName: "English" },
    lv: { nativeName: "Latviešu" },
  };
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <div>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </div>
      <header>
        <h2>{t('title')}</h2>
      </header>

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
