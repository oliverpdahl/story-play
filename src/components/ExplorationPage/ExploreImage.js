import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Popover, OverlayTrigger } from "react-bootstrap";

function ExploreImage(props) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.title}</Popover.Title>
      <Popover.Content>{props.content}</Popover.Content>
    </Popover>
  );
  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <img
        src={props.image}
        alt={props.alternate}
        style={{ width: "100%", maxHeight: "100%" }}
      />
    </OverlayTrigger>
  );
}

ExploreImage.propTypes = {};

export default ExploreImage;
