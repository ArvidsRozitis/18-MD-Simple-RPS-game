import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import { useTranslation, Trans } from "react-i18next";

function App() {
  const lngs = {
    en: { nativeName: "English" },
    lv: { nativeName: "Latviešu" },
    de: { nativeName: "Deutsch" },
  };
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <div className="language__selection--container">
        {Object.keys(lngs).map((lng) => (
          <button
            className="language__button"
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

      <nav className="nav__bar">
        <NavLink to="/" className="nav__item">
          <Trans i18nKey="navigation.Home">Home</Trans>
        </NavLink>
        <NavLink to="/game" className="nav__item">
          <Trans i18nKey="navigation.Play">Play</Trans>
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
