export default function Search() {
  return (
    <label
      htmlFor=""
      className="header-search"
      style={{ visibility: "hidden" }}
    >
      <div className="search-container ">
        <input placeholder="Recherche..." type="text" className="inputSearch" />
        <button className="buttonSearch" type="button">
          Rechercher
        </button>
      </div>
    </label>
  );
}
