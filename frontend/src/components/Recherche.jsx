import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Recherche() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchActive, setSearchActive] = useState(true);

  const getMoviebySearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${searchQuery}`
    )
      .then((res) => res.json())
      .then((data) => setSearchResults(data.results));
  };

  useEffect(() => {
    getMoviebySearch();
  }, []);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    getMoviebySearch();
  };

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

  return (
    <label
      htmlFor=""
      className="header-search"
      style={{ visibility: "hidden" }}
    >
      <div className="search-container ">
        <input
          placeholder="Recherche..."
          type="text"
          className="inputSearch"
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          id="myButton"
          className="buttonSearch"
          type="button"
          onClick={handleSearch}
        >
          Rechercher
        </button>
        <ul>
          {searchResults.map((movie) => (
            <Link to={`/movies/${movie.id}`}>
              <li key={movie.id} onClick={displaySearchBar}>
                {movie.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </label>
  );
}
