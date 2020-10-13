import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="text-center">
      <Jumbotron fluid>
        <Container>
          <h1>StoryPlay</h1>
          <p>
            Learn about careers while playing
          </p>
        </Container>
      </Jumbotron>
      <Button variant="outline-info" size="lg" block>START</Button>
    </div>
  );
}

export default App;
