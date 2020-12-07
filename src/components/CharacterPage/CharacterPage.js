import React from "react";
import { CharacterImages } from "../../data/Character";
import { useCounterStore } from "../../store/counterContext.js";
import { Images } from "../../data/Images";
import CharacterChoice from "./CharacterChoice";

export default function CharacterPage() {
  const [count] = useCounterStore();
  const characterChoices = [
    Images.actor,
    Images.doctor,
    Images.farmer,
    Images.waiter,
  ];
  const listCharacterChoices = characterChoices.map((image, index) => (
    <CharacterChoice image={image} key={index} />
  ));
  return (
    <div className="CharacterImage">
      <p>You have {count} stars</p>
      {listCharacterChoices}
    </div>
  );
}
