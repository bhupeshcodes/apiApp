import React, { useState } from "react";
import App from "../App";

export const mainContext = React.createContext();
const Context = () => {
  const [CharacterList, setCharacterList] = useState([]);
  const [Character, setCharacter] = useState("");
  const [length, setLength] = React.useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [charId, setCharId] = useState(0);
  const [quotes, setQuotes] = React.useState("");

  return (
    <div>
      <mainContext.Provider
        value={{
          CharacterList,
          setCharacterList,
          Character,
          setCharacter,
          length,
          setLength,
          search,
          setSearch,
          category,
          setCategory,
          charId,
          setCharId,
          quotes,
          setQuotes,
        }}
      >
        <App />
      </mainContext.Provider>
    </div>
  );
};

export default Context;
