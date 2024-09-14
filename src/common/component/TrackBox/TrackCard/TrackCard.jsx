import React from 'react'
import './TrackCard.style.css'
import { useNavigate } from 'react-router-dom';

const TrackCard = ({track}) => {
  const navigate = useNavigate();
  const toMovieTrackPage = (id, event) => {
    event.preventDefault();
    navigate(`/albums/${id}`);
  };
  return (
    <div className='trackcard_card' onClick={(event) => toMovieTrackPage(track.id,event)}>
      <div className='trackcard_wrapper'>
        <img src={track?.images[0].url} alt='' className='trackcard_img'></img>
      </div>
      <div>{track?.name}</div>
      <div>{track?.artists.map((artist, index)=>{
        return (
          <span key={index} className='me-2 trackcard_artist'>{artist.name}</span>
        );
      })}</div>
    </div>
  )
}

export default TrackCard
