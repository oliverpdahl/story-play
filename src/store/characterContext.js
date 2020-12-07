import React, { useState, createContext, useContext } from "react";
import { Images } from "../data/Images";
export const CharacterContext = createContext();
export const CharacterProvider = (props) => {
  const [character, setCharacter] = useState(Images.test_character);
  return (
    <CharacterContext.Provider
      value={[character, setCharacter]}
      {...props}
    ></CharacterContext.Provider>
  );
};
export const useCounterStore = () => useContext(CharacterContext);
