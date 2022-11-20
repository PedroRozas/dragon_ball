import "./styles.css";

function Search(props) {
  return (
    <>
    <div className="search-box">
      <input
        className="search-text"
        type="text"
        placeholder="Nombre de personaje.."
        onChange={(event) => {
          props.State(event.target.value);
        }}
      />
      <a href="/#" className="search-btn">
        <i className="fas fa-search"></i>
      </a>
    </div>
    <div className="subtitle">Buscar por nombre</div>
    </>
  );
}

export default Search;
