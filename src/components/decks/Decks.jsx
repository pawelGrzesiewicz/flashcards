import { useEffect, useState } from "react";
import { getDecks } from "../../api/api.js";

function Decks() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    getDecks(controller.signal).then((data) => setDecks(data));

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
            border: "1px solid dark grey",
            borderRadius: 4,
            marginBottom: 10,
            padding: 10,
          }}
        >
          <h2>
            {name}, <span>{cards}</span>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Decks;
