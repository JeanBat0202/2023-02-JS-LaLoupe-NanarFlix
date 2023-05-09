import PropTypes from "prop-types";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Recherche from "./Recherche";

export default function Header({ userId }) {
  const navigate = useNavigate();

  const [burgerActive, setBurgerActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const displaySearchBar = () => {
    const headerSearch = document.querySelector(".header-search");
    if (searchActive) {
      headerSearch.style.visibility = "hidden";
      setSearchActive(false);
    } else {
      headerSearch.style.visibility = "visible";
      setSearchActive(true);
    }
  };

  const displayMenu = () => {
    const headerMenu = document.querySelector(".header-menu");
    const hamburgerIcon = document.querySelector(".hamburger");
    if (burgerActive) {
      headerMenu.style.visibility = "hidden";
      hamburgerIcon.style.backgroundImage =
        "url('/src/assets/icons/hamburger-icon.svg')";
      hamburgerIcon.style.position = "";
      setBurgerActive(false);
    } else {
      headerMenu.style.visibility = "visible";
      hamburgerIcon.style.backgroundImage =
        "url('/src/assets/icons/close-icon.svg')";
      hamburgerIcon.style.position = "fixed";
      setBurgerActive(true);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="header-container bg-slate-50">
      <header className="">
        <div className="header-logo">
          <img
            className="turnip-logo"
            src="/src/assets/supernavet.png"
            alt="supernavet"
          />
          <NavLink to="/">NANARFLIX</NavLink>
        </div>
        <ul className="header-icons">
          <li className="icon hamburger" onClick={displayMenu} />
          <li className="icon search flex" onClick={displaySearchBar}>
            {/* <Search /> */}
          </li>
          {userId && (
            <NavLink to={`/profil/${userId}`} className="">
              <li className="icon account" />
            </NavLink>
          )}
        </ul>

        <div className="header-menu" style={{ visibility: "hidden" }}>
          <div className="nav accueil">
            <NavLink onClick={displayMenu} to="/" className="">
              Accueil
            </NavLink>
          </div>
          <div className="nav annuaire">
            <NavLink onClick={displayMenu} to="/annuaire" className="">
              Annuaire
            </NavLink>
          </div>
          <div className="nav communaute">
            <NavLink onClick={displayMenu} to="/communaute" className="">
              Communauté
            </NavLink>
          </div>
          {userId && (
            <div className="nav profil">
              <NavLink
                onClick={displayMenu}
                to={`/profil/${userId}`}
                className=""
              >
                Profil
              </NavLink>
            </div>
          )}
          {!userId && (
            <div className="nav login">
              <NavLink onClick={displayMenu} to="/login" className="">
                Login
              </NavLink>
            </div>
          )}
          <div className="nav contact">
            <NavLink onClick={displayMenu} to="/contact" className="">
              Nous contacter
            </NavLink>
          </div>
          {userId && (
            <button className="deconnexion" type="submit" onClick={logout}>
              Se déconnecter
            </button>
          )}
        </div>
        <Recherche />
      </header>
    </header>
  );
}

Header.propTypes = {
  userId: PropTypes.number,
};

Header.defaultProps = { userId: undefined };
