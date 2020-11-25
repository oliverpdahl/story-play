import React from "react";
import {CharacterImages} from "../data/Character";

export default function CharacterImage() {
  return (
    <div className="CharacterImage">
      <img src={CharacterImages.test_character.image} 
      alt={CharacterImages.test_character.alternate} 
      height="auto" 
      width="70%" />
    </div>
  );
}
