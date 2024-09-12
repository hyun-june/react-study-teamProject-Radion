import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./AudioPlayerButton.style.css"

const AudioPlayerButton = ({preview}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // 오디오 일시 정지
      } else {
        audioRef.current.play(); // 오디오 재생
      }
      setIsPlaying(!isPlaying); // 상태 반전
    }
  };

  return (
    <div>
      <button className="play-button me-3" onClick={handlePlay}>
        <span className="play-icon">{isPlaying ? "||" : "▶"}</span>
      </button>
      <audio ref={audioRef} src={preview} />
    </div>
  );
};

export default AudioPlayerButton;