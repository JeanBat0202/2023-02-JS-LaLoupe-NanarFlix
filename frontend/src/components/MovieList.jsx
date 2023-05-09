// import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Tv from "./Tv";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [currentPage, setCurrentPage] = useState(108);
  const [currentGenre, setCurrentGenre] = useState();

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate&with_genres=${currentGenre}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  const getTv = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=popularity.asc&page=${currentPage}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=4&with_genres=${currentGenre}`
    )
      .then((res) => res.json())
      .then((data) => setTvList(data.results));
  };

  useEffect(() => {
    getMovie();
    getTv();
  }, [currentPage, currentGenre]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleGenreChange = (e) => {
    setCurrentGenre(e.target.value);
  };

  return (
    <div>
      <h1 className="pt-10 text-4xl text-center text-white font-bold ">
        ANNUAIRE
      </h1>
      <section className="MovieSection">
        {" "}
        <h2 className="flex justify-center items-center text-4xl   text-[#9EBA9B]">
          FILMS
        </h2>
        <div className="fondMovieList flex flex-row-reverse justify-between">
          <form className="pt-2">
            <label className="mr-5 text-2xl text-[#9EBA9B]" htmlFor="genre">
              Genre :
            </label>
            <select
              className="w-24 mr-14 rounded-md border-[#9EBA9B]"
              name="genre"
              id="movieGenre "
              value={currentGenre}
              onChange={handleGenreChange}
            >
              <option value="27">Horreur</option>
              <option value="35">Comedie</option>
              <option value="10749">Romance</option>
              <option value="28">Action</option>
              <option value="18">Drame</option>
            </select>
          </form>
        </div>
        <section className="sectionMovieList gap-4 flex flex-wrap justify-center m-3 ">
          {movieList
            .slice(0 - 14)
            .map((movie) =>
              movie.poster_path ? (
                <Movie {...movie} key={`movie-${movie.id}`} />
              ) : null
            )}
        </section>
      </section>

      <section className="TvSection">
        <h2 className="flex justify-center items-center text-4xl pt-14  text-[#9EBA9B]">
          SERIES
        </h2>
        <section className="sectionTvList gap-4 flex flex-wrap justify-center m-3 ">
          {tvList.map((tv) =>
            tv.poster_path ? <Tv {...tv} key={`tv-${tv.id}`} /> : null
          )}
        </section>
        <div className="buttonPrevNext">
          <button
            className="buttonPrev"
            type="button"
            style={{ display: currentPage === 1 ? "none" : "block" }}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Page Précédente
          </button>
          <button
            className="buttonNext"
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Page Suivante
          </button>
        </div>
      </section>
    </div>
  );
}

// MovieList.propTypes = {
//   title: PropTypes.string.isRequired,
//   poster_path: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//     })
//   ),
// };
// MovieList.defaultProps = { movies: [] };
