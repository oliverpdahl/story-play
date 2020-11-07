import React from "react";
import lion from "../../images/lion.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CareerButton from "./CareerButton";
import { Careers } from "../../data/Careers";
import FlaticonAttribution from "../FlaticonAttribution";

export default function CareersPage() {
  return (
    <div className="px-5">
      <CareerButton
        to={Careers.zoologist.slug}
        title={Careers.zoologist.title}
        image={Careers.zoologist.buttonImg}
      />
      <FlaticonAttribution />
    </div>
  );
}
