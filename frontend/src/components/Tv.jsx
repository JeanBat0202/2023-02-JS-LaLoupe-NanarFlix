import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Tv({ id, name, poster_path }) {
  return (
    <Link to={`/tv/${id}`}>
      <figure className="image-container shadow-xl w-24 md:w-48">
        <img
          className="imgCatalog m-auto shadow-xl"
          src={`https://www.themoviedb.org/t/p/w1280${poster_path}`}
          alt={name}
        />
        <div className="text-overlay">{name}</div>
      </figure>
    </Link>
  );
}

Tv.propTypes = {
  name: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
