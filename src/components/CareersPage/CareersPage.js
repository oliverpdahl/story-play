import React from "react";
import lion from "../../images/lion.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CareerButton from "./CareerButton";
import { Careers } from "../../data/Careers";
import FlaticonAttribution from "../FlaticonAttribution";

const listButtons = () => {
  return Careers.map((career) => (
    <CareerButton
      to={`explore/${career.slug}`}
      title={career.title}
      image={career.buttonImg}
    />
  ));
};

export default function CareersPage() {
  return (
    <div className="px-5">
      {listButtons()}
      <FlaticonAttribution />
    </div>
  );
}
