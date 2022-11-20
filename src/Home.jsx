import "./App.css";
import Container from "./components/mainContainer/index";
import Header from "./components/mainHeader/index";
import { useEffect, useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [universes, setUniverses] = useState([]);
  useEffect(() => {
    const request_options = {
      method: "GET",
    };

    fetch(
      "https://dragon-ball-super-api.herokuapp.com/api/characters",
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
  }, []);
  const data = Object.values(items);
  const unique = [...new Set(data.map((data) => data.universe))];
  unique.sort(function (a, b) {
    return a - b;
  });
  if (error) {
    return <>{error.message}</>;
  } else if (!loaded) {
    return <>loading...</>;
  } else {
    return (
      <>
        {/* Luego de obtener la informacion desde la api,
         se la envio a los componentes secundarios*/}
        <Header
          State={setSearch}
          universe={unique}
          setUniverse={setUniverses}
        />
        <Container info={data} Search={search} Universe={universes} />
      </>
    );
  }
}

export default App;
