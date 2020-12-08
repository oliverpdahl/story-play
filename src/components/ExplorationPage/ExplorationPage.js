import React from "react";
import { Container, Image } from "react-bootstrap";
import ExploreImage from "./ExploreImage";
import FlaticonAttribution from "../FlaticonAttribution";
import "./ExplorationPage.css";
import CharacterButton from "../CharacterPage/CharacterButton";

function ExplorationPage(props) {
  const listImages = props.career.images.map((image, index) => (
    <ExploreImage
      image={image.image}
      key={index}
      content={image.content}
      title={image.title}
      alternate={image.alternate}
      audio={image.audio}
    />
  ));
  const background = props.career.background;
  return (
    <div>
      <Container fluid>
        <h1 className="text-center">{props.career.title}</h1>
        <CharacterButton />
        <div id="imageContainer" className="background">
          <Image src={background} fluid />
          <div className="interactive-1 image">{listImages[0]}</div>
          <div className="interactive-2 image">{listImages[1]}</div>
          <div className="interactive-3 image">{listImages[2]}</div>
          <div className="interactive-4 image">{listImages[3]}</div>
        </div>
        <FlaticonAttribution />
      </Container>
    </div>
  );
}
export default ExplorationPage;
