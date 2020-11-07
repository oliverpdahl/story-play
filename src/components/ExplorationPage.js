import React from "react";
import PropTypes from "prop-types";
import lion from "../images/lion.png";
import { Container, Row, Col, Popover, OverlayTrigger } from "react-bootstrap";
const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

function ExplorationPage(props) {
  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="align-middle pt-5"
    >
      <Container className="align-middle" style={{ maxWidth: "650px" }}>
        <Row>
          <Col xs={6}>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <img
                src={lion}
                alt="lion"
                style={{ width: "100%", maxHeight: "100%" }}
              />
            </OverlayTrigger>
          </Col>
          <Col xs={6}>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <img
                src={lion}
                alt="lion"
                style={{ width: "100%", maxHeight: "100%" }}
              />
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <img
                src={lion}
                alt="lion"
                style={{ width: "100%", maxHeight: "100%" }}
              />
            </OverlayTrigger>
          </Col>
          <Col xs={6}>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <img
                src={lion}
                alt="lion"
                style={{ width: "100%", maxHeight: "100%" }}
              />
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

ExplorationPage.propTypes = {};

export default ExplorationPage;
