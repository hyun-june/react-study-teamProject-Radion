import React, { useRef, useState } from 'react'
import "./TrackAudioButton.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faX } from '@fortawesome/free-solid-svg-icons';

const TrackAudioButton = ({preview, index}) => {
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
      <>
      {preview
      ?
      <>
        <button className="trackaudiobutton_play_button" onClick={handlePlay}>
          <span className="trackaudiobutton_play_icon">{isPlaying ? <FontAwesomeIcon className='trackaudiobutton_pause-icon' icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</span>
          <span className="trackaudiobutton_index_icon">{index}</span>
        </button>
        <audio ref={audioRef} src={preview} />
      </>
      :
      <>
        <button className="trackaudiobutton_play_button">
          <FontAwesomeIcon icon={faX} className='trackaudiobutton_x'/>
        </button>
      </>}
        
      </>
    );
  };

export default TrackAudioButton
