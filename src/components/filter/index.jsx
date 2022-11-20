import "./styles.css";
import Select from "react-select";

const options = [
  { value: "0", label: "Universo 0" },
  { value: "1", label: "Universo 1" },
  { value: "2", label: "Universo 2" },
  { value: "3", label: "Universo 3" },
  { value: "4", label: "Universo 4" },
  { value: "5", label: "Universo 5" },
  { value: "6", label: "Universo 6" },
  { value: "7", label: "Universo 7" },
  { value: "8", label: "Universo 8" },
  { value: "9", label: "Universo 9" },
  { value: "10", label: "Universo 10" },
  { value: "11", label: "Universo 11" },
  { value: "12", label: "Universo 12" },
];

function Filter(props) {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      fontSize: "10px",
    }),
    menu: (base) => ({
      ...base,
      fontSize: "10px",
    }),
  };

  const handleSelect = (selectedOption) => {
    props.setUniverse(selectedOption);
  };
  return (
    <>
      <div className="filter-box">
        <a href="/#" className="filter-btn">
          <i className="fas fa-filter"></i>
        </a>
        <Select
          className="mySelect"
          classNamePrefix="mySelect"
          closeMenuOnSelect={false}
          autoFocus={false}
          styles={customStyles}
          onChange={handleSelect}
          placeholder="Filtrar por universo"
          label="Universo"
          isMulti
          options={options}
        />
        <div className="filtertitle">Filtrar universos</div>
      </div>
    </>
  );
}

export default Filter;
