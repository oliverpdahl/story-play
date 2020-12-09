import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { AudioPlayerProvider, useAudioPlayer } from "react-use-audio-player";
import { useCounterStore } from "../../store/counterContext";

function ExploreImage(props) {
  const [count, setCount] = useCounterStore();
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.title}</Popover.Title>
      <Popover.Content>{props.content}</Popover.Content>
    </Popover>
  );
  const ImageWithAudio = ({ file }) => {
    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
      src: file,
      format: "mp3",
      autoplay: false,
      onend: () => console.log("sound has ended!"),
    });

    // This is the shadow that goes behind the image on click
    const shadow = {
      filter: "drop-shadow(1rem 1rem 1.2rem rgba(144, 238, 144, 0.7))",
    };

    const notPlayingCS = { width: "100%", maxHeight: "100%" };

    const playingCS = { ...shadow, ...notPlayingCS };

    return (
      <img
        src={props.image}
        alt={props.alternate}
        style={playing ? playingCS : notPlayingCS}
        onClick={() => {
          togglePlayPause();
          playing || setCount(count + 1);
        }}
      />
    );
  };
  return (
    <div>
      <AudioPlayerProvider>
        <ImageWithAudio file={props.audio} />
      </AudioPlayerProvider>
    </div>
  );
}

ExploreImage.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  alternate: PropTypes.string,
};

export default ExploreImage;
