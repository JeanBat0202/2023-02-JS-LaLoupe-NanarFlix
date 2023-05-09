import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movie({ id, title, poster_path }) {
  return (
    <Link to={`/movies/${id}`}>
      <figure className="image-container shadow-xl w-24 md:w-48">
        <img
          className="imgCatalog m-auto shadow-xl"
          src={`https://www.themoviedb.org/t/p/w1280${poster_path}`}
          alt={title}
        />
        <div className="text-overlay">{title}</div>
      </figure>
    </Link>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
