import React from 'react';
import './MusicCard.style.css'
import { useNavigate } from 'react-router-dom';

const MusicCard = ({ music }) => {
  const navigate = useNavigate();
  console.log("여기가 Releasest 마지막",music);
  const secondImage = music.images && music.images[0] ? music.images[0].url : '';


  const goToDetailPage = (id) => {
    if (music && music.album && music.album.id) {
      navigate(`/albums/${music.id}`);
  } else {
        console.error('Error: Missing album id in music data');
    }
  }

  return (
    <div>
    {music ? (
      <img src={secondImage} alt={music.name} onClick={goToDetailPage} />
    ) : (
      <p>No music data available</p>
    )}
  </div>
  );
};

export default MusicCard;
