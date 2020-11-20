import React from "react";
import {CharacterImages} from "../data/Character";
import "../components/CharacterPage/Character.css";

export default function CharacterImage() {
  return (
    <div className="CharacterImage">
      <img src={CharacterImages.test_character.image} alt={CharacterImages.test_character.alternate}/>
    </div>
  );
}
