import { Link } from "react-router-dom";
import React from "react";

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
          } else if (item.name.toLowerCase().includes(props.Search.toLowerCase()) && list.length === 0) {
            return item
          } else if (list.includes(item.universe) && props.Search === "") {
            return item
          } else if (list.includes(item.universe) && item.name.toLowerCase().includes(props.Search.toLowerCase())) {
            return item
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
