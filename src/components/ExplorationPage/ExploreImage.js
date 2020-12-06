import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Popover, OverlayTrigger } from "react-bootstrap";
import soundfile from "../../audio/test.mp3";
import { AudioPlayerProvider, useAudioPlayer } from "react-use-audio-player";

function ExploreImage(props) {
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

    const shadow = {
      boxShadow: "0px 12px 22px 1px rgb(0,0,255)",
    };

    const notPlayingCS = { width: "100%", maxHeight: "100%" };

    const playingCS = { ...shadow, ...notPlayingCS };

    return (
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <img
          src={props.image}
          alt={props.alternate}
          style={playing ? playingCS : notPlayingCS}
          onClick={togglePlayPause}
        />
      </OverlayTrigger>
    );
  };
  return (
    <div>
      <AudioPlayerProvider>
        <ImageWithAudio file={soundfile} />
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
