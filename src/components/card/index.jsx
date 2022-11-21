import { Link } from "react-router-dom";

function Card(props) {
  const list = props.Universe.map((item) => item.value);

  return (
    <>
      {" "}
      {/* Esto me filtra los datos del Array completo que viene de la api
          basado en el buscador por nombre o filtro de universo */}
      {props.info
        .filter((item) => {
          if (props.Search === "" && list.length === 0) {
            return item;
          } else if (props.Search !== "" && list.length === 0) {
            return item.name.toLowerCase().includes(props.Search.toLowerCase());
          } else if (list.length !== 0 && props.Search === "") {
            return list.includes(item.universe);
          } else if (list.length !== 0 && props.Search !== "") {
            return list.includes(item.universe) && item.name.toLowerCase().includes(props.Search.toLowerCase()
            );
          }
        })
        .map((item, key) => (
          <div className="cards" key={key}>
            <div className="cardtext">{item.name}</div>
            <div className="cardtext2">Universo {item.universe}</div>
            <div className="imgcardcontainer">
              <img className="imgcard" src={item.imageUrl} alt="" />
            </div>
            <Link
              to={`/characters`}
              resizeMode="contain"
              state={{ name: item.name }}
            >
              <button className="cardbutton">Ver ficha</button>
            </Link>
          </div>
        ))}
    </>
  );
}

export default Card;
