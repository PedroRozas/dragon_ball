import logo from "../logo/dragon_ball_super.png";
import React from "react";
import background from "../logo/fondo_dragon_ball.png";
import Search from "../search/search";
import Filter from "../filter/index";

function mainheader(props) {
  return (
    <>{/* Aqui les mando la info a los componenetes de filtrar y buscar
    que vienen desde el componente principal (Home)*/}
      <Search State={props.State} />
      <Filter setUniverse={props.setUniverse} />
      <div className="container">
        <img src={background} alt="background" className="mainLogo" />
        <img src={logo} alt="background" className="subLogo" width={380} />
        <div className="text1">Prueba del Dragón</div>
      </div>
    </>
  );
};

export default React.memo(mainheader);
