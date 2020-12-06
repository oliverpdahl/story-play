import { Images } from "./Images";
import { Audios } from "./Audios";

export const Careers = [
  {
    title: "Zoologist",
    buttonImg: Images.lion.image,
    background: Images.test_bg.image,
    slug: "zoologist",
    images: [
      {
        title: "lion",
        image: Images.lion.image,
        audio: Audios.test,
        alternate: "Lion",
        title: "Lion",
        content:
          "Zoologists study many different types of animals including lions",
      },
      {
        title: "track",
        image: Images.track.image,
        alternate: "Animal Track",
        audio: new Audio("../audio/test.mp3"),
        title: "Animal Track",
        content:
          "Zoologists can look at the tracks of animals to study behaviours",
      },
      {
        title: "gps",
        image: Images.gps.image,
        alternate: "GPS",
        audio: new Audio("../audio/test.mp3"),
        title: "GPS",
        content: "Zoologists track movements of animals using GPS",
      },
      {
        title: "binoculars",
        image: Images.binoculars.image,
        alternate: "Binoculars",
        audio: new Audio("../audio/test.mp3"),
        title: "Binoculars",
        content: "Zoologists observe animals from afar using binoculars",
      },
      {
        title: "character",
        image: Images.test_character.image,
        alternate: "test_char",
        audio: new Audio("../audio/test.mp3"),
        title: "test_character",
        content: "This is you!",
      },
    ],
  },
  {
    title: "Marine Biologist",
    buttonImg: Images.dolphin.image,
    background: Images.test_bg.image,
    slug: "marine-biologist",
    images: [
      {
        title: "scuba",
        image: Images.scuba.image,
        alternate: "Scuba",
        audio: new Audio("../audio/test.mp3"),
        title: "Scuba",
        content:
          "Marine Biologists use scuba gear to go underwater and observe marine animals in their homes",
      },
      {
        title: "boat",
        image: Images.boat.image,
        alternate: "Boat",
        audio: new Audio("../audio/test.mp3"),
        title: "Boat",
        content:
          "Marine Biologists use boats to help them observe animals in the ocean",
      },
      {
        title: "dolphin",
        image: Images.dolphin.image,
        alternate: "Dolphin",
        audio: new Audio("../audio/test.mp3"),
        title: "Dolphin",
        content:
          "Marine Biologists study many different types of animals including dolphins",
      },
      {
        title: "submarine",
        image: Images.submarine.image,
        alternate: "Submarine",
        audio: new Audio("../audio/test.mp3"),
        title: "Submarine",
        content:
          "Marine Biologists must use submarines to explore the deepest depths of the ocean",
      },
      {
        title: "character",
        image: Images.test_character.image,
        alternate: "test_char",
        audio: new Audio("../audio/test.mp3"),
        title: "test_character",
        content: "This is you!",
      },
    ],
  },
  {
    title: "Archaeologist",
    buttonImg: Images.pottery.image,
    background: Images.test_bg.image,
    slug: "archeologist",
    images: [
      {
        title: "artifact",
        image: Images.pottery.image,
        alternate: "Artifact",
        audio: new Audio("../audio/test.mp3"),
        title: "Artifact",
        content:
          "Archaeologists uncover artifacts that help them understand past cultures",
      },
      {
        title: "brush",
        image: Images.brush.image,
        alternate: "Brush",
        audio: new Audio("../audio/test.mp3"),
        title: "Brush",
        content: "Archaeologists use brushes to carefully uncover artifacts",
      },
      {
        title: "cave_painting",
        image: Images.cave_painting.image,
        alternate: "Cave_Painting",
        audio: new Audio("../audio/test.mp3"),
        title: "Cave_Painting",
        content:
          "Archaeologists can find cave paintings left behind by early humans",
      },
      {
        title: "fossil",
        image: Images.shell.image,
        alternate: "Fossil",
        audio: new Audio("../audio/test.mp3"),
        title: "Fossil",
        content:
          "Archaeologists can find fossils, or the remains, of long extinct plants and animals",
      },
      {
        title: "character",
        image: Images.test_character.image,
        alternate: "test_char",
        title: "test_character",
        content: "This is you!",
      },
    ],
  },
];
