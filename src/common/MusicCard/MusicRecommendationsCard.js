import './MusicRecommendationsCard.style.css';
import React from 'react';
import Badge from 'react-bootstrap/Badge';



const MusicRecommendationsCard = ({ music, goToDetailPage }) => {
    console.log( "여기가 레커멘카드 마지막 ",music)

    const secondImage = music.images && music.images.length > 0 ? music.images[0].url : '';

  // const goToDetailPage = (id) => {
  //   navigate(`/music/${id}`);
  // }

  return (
    <div>
      <img src={secondImage} alt={music.name} />

  </div>
  );
};

export default MusicRecommendationsCard ;
