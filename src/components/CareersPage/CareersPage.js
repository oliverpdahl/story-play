import React from "react";
import lion from "../../images/lion.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CareerButton from "./CareerButton";
import { Images } from "../../data/Images";
import FlaticonAttribution from "../FlaticonAttribution";

export default function CareersPage() {
  return (
    <div className="px-5">
      <CareerButton
        to="/explore"
        title="This Is A Job"
        image={Images.lion.image}
      />
      <FlaticonAttribution />
    </div>
  );
}
