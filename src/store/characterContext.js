import React, { useState, createContext, useContext } from "react";
import { Images } from "../data/Images";
export const CharacterContext = createContext();
export const CharacterProvider = (props) => {
  const [character, setCharacter] = useState(Images.doctor);
  return (
    <CharacterContext.Provider
      value={[character, setCharacter]}
      {...props}
    ></CharacterContext.Provider>
  );
};
export const useCharacterStore = () => useContext(CharacterContext);
