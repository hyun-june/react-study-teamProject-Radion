import './MusicRecommendationsCard.style.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';



const MusicRecommendationsCard = ({ music }) => {
    console.log( "여기가 레커멘카드 마지막 ",music)
    const navigate = useNavigate();
    const secondImage = music.album.images && music.album.images.length > 0 ? music.album.images[0].url : '';

    const goToDetailPage = (id) => {
      if (music ) {
        navigate(`/albums/${music.album.id}`);
    } else {
          console.error('Error: Missing album id in music data');
      }
    }

  return (
  
      <div className="musicRecommendations-card" onClick={goToDetailPage}>
        <img src={secondImage} alt={music.name}  />
      </div>


  );
};

export default MusicRecommendationsCard ;
