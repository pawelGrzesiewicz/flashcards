import { useEffect, useState } from "react";
import { getData } from "../../api/api.js";
import { Link } from "react-router-dom";

function Decks() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    getData("decks", controller.signal).then(setDecks);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Decks</h1>
      {decks.map(({ id, name, cards }) => (
        <div
          key={id}
          style={{
            border: "1px solid darkgrey",
            borderRadius: 4,
            marginBottom: 10,
            padding: 10,
          }}
        >
          <h2>
            {name}, <span>{cards}</span>
          </h2>
          <Link to={`/learning/${id}`}>Learn Now</Link>
        </div>
      ))}
    </div>
  );
}

export default Decks;
