import { useRef, useState } from "react";
import ReactPlayer from 'react-player';
import DummyVideo from "../Assets/videos/DummyVideo.mp4"
import "./PlayMovie.css"

export const PlayMovie = ()=> {

  const [playing, setPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  return (
    <div>
      <div className="player-wrapper" style={{transform: `scale(${zoomLevel})`}}>
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          url={DummyVideo}
          width="100%"
          height="100%"
          playing={playing}
        />
      </div>
      <div className="controls">
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};
