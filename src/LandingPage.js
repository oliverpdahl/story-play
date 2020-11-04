import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
function LandingPage() {
  return (
    <div className="text-center" style={{ height: 1000 }}>
      <div className="m-4">
        <Jumbotron>
          <Container>
            <h1>StoryPlay</h1>
            <p>Learn about careers while playing</p>
          </Container>
        </Jumbotron>
        <Button variant="info" size="lg" block className="">
          START
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
