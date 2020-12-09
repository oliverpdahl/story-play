import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Audios } from "../data/Audios";
import { AudioPlayerProvider, useAudioPlayer } from "react-use-audio-player";
function LandingPage() {
  const ButtonWithAudio = ({ file }) => {
    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
      src: file,
      format: "mp3",
      autoplay: false,
      onend: () => console.log("sound has ended!"),
    });

    return (
      <Button
        variant="info"
        size="lg"
        block
        className="btn-info"
        onClick={togglePlayPause}
      >
        WELCOME
      </Button>
    );
  };
  return (
    <div className="text-center" style={{ height: 1000 }}>
      <div className="m-4">
        <Jumbotron>
          <Container>
            <h1>StoryPlay</h1>
            <p>Learn about careers while playing</p>
          </Container>
        </Jumbotron>
        <AudioPlayerProvider>
          <ButtonWithAudio file={Audios.welcome} />
        </AudioPlayerProvider>
        <Link to="/careers">
          <Button variant="success" size="lg" block className="my-2">
            START
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
