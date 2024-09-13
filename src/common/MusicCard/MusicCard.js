import React from 'react';

import './MusicCard.style.css'


const MusicCard = ({ music, goToDetailPage }) => {

  console.log("여기가 Releasest 마지막",music);
  const secondImage = music.images && music.images[0] ? music.images[0].url : '';


  // const goToDetailPage = (id) => {
  //   navigate(`/music/${id}`);
  // }

  return (
    <div>
      <img src={secondImage} alt={music.name} />

  </div>
  );
};

export default MusicCard;
