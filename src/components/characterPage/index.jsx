import logo from "../logo/dragon_ball_super.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Character() {
  const location = useLocation();
  const { name } = location.state;
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [url, setUrl] = useState("");
  setUrl("https://dragon-ball-super-api.herokuapp.com/api/characters/" + name)

  useEffect(() => {
    const request_options = {
      method: "GET",
    };

    fetch(
      url,
      request_options
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setItems(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, [url]);

  if (error) {
    return <>{error.message}</>;
  } else if (!loaded) {
    return <>loading...</>;
  } else {
    if (items.transform === null) {
      items.transform = "Desconocido";
    }
    return (
      <>
        <div className="Characterpage">
          <Link to="/">
            <div className="backbutton">
              <i className="arrow left"></i>Ir a inicio</div>
          </Link>
          <Link to="/">
            {" "}
            <div>
              <img src={logo} alt="background" className="logopage2" />
            </div>
          </Link>

          <img className="imgcharacter" src={items.imageUrl} alt=""></img>
          <div className="charactercontainer">
            <div className="charactername"> {items.name} </div>
            <div className="universe">
              <div className="universetext">Universo {items.universe}</div>
            </div>
            <div className="containerbox">
              <div className="redbox">
                <div>
                  <div className="textbox">Specie</div>
                </div>
              </div>
              <div className="blackbox">
                <div className="textbox">{items.specie}</div>
              </div>
            </div>
            <div className="containerbox">
              <div className="redbox">
                <div>
                  <div className="textbox">Role</div>
                </div>
              </div>
              <div className="blackbox">
                <div className="textbox">{items.role}</div>
              </div>
            </div>
            <div className="containerbox">
              <div className="redbox">
                <div>
                  <div className="textbox">Status</div>
                </div>
              </div>
              <div className="blackbox">
                <div className="textbox">{items.status}</div>
              </div>
            </div>
            <div className="containerbox">
              <div className="redbox">
                <div>
                  <div className="textbox">Originplanet</div>
                </div>
              </div>
              <div className="blackbox">
                <div className="textbox">{items.originplanet}</div>
              </div>
            </div>
            <div className="containerbox">
              <div className="redbox">
                <div>
                  <div className="textbox">Transform</div>
                </div>
              </div>
              <div className="blackbox">
                <div className="textbox">{items.transform}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
