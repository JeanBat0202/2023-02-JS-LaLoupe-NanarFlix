import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import SoftThemeButton from "./SoftTheme";

export default function Footer({ userId }) {
  return (
    <footer>
      <div className="footer-content">
        {" "}
        <img
          className="turnip-logo"
          src="/src/assets/fannavet.png"
          alt="fannavet"
        />
        <h3>NANARFLIX</h3>
        <p>
          Nanarflix est le site de référence sur les nanars ! Sur Nanarflix vous
          retrouverez une communauté de passionnés de navets, nanars et autres
          mauvais films recommandables (ou non). N'hésitez pas à nous rejoindre,
          et proposez vos pépites !
        </p>
        <div className="tmdb">
          <p>site cultivé avec</p>
          <a
            href="https://www.themoviedb.org/documentation/api"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../src/assets/tmdb-logo.svg"
              alt="tmdb logo"
              className="w-10"
            />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">copyright ©️ Nanarflix</p> <SoftThemeButton />
        <div className="footer-menu">
          <div className="nav accueil">
            <NavLink to="/" className="navlink">
              Accueil
            </NavLink>
          </div>
          <div className="nav annuaire">
            <NavLink to="/annuaire" className="navlink">
              Annuaire
            </NavLink>
          </div>
          <div className="nav communaute">
            <NavLink to="/communaute" className="navlink">
              Communauté
            </NavLink>
          </div>
          {userId && (
            <div className="nav profil">
              <NavLink to={`/profil/${userId}`} className="navlink">
                Profil
              </NavLink>
            </div>
          )}
          {!userId && (
            <div className="nav login">
              <NavLink to="/login" className="">
                Login
              </NavLink>
            </div>
          )}
          <div className="nav contact">
            <NavLink to="/contact" className="navlink">
              Nous contacter
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  userId: PropTypes.number,
};

Footer.defaultProps = { userId: undefined };
