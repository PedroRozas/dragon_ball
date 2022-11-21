import Card from "../card/index";
import React from "react";

function mainContainer(props) {
  return (
    <>{/* Este es un contenedor para cada card, de esta forma me aseguro
    que puedan quedar ordenadas y puedo controlar cuanto crecen*/}
      <div className="mainContainer">
        <Card
          info={props.info}
          Search={props.Search}
          Universe={props.Universe}
        />
      </div>
    </>
  );
}

export default React.memo(mainContainer);