import './MusicRecommendationsCard.style.css';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../utils/api';

const MusicRecommendationsCard = ({ music }) => {
    const navigate = useNavigate();
    const secondImage = music.album.images && music.album.images.length > 0 ? music.album.images[0].url : '';

    const goToDetailPage = async (id) => {
      if (!music || !music.id) {
        console.error('Error: Missing music or music id');
        return;
      }
    
      try {
        await trackApi(music.id);
        navigate(`/tracks/${music.id}`);
      } catch (error) {
        console.error('Navigation error:', error);
      }
    };
    
    const trackApi = async(id) => {
      try {
        const response = await api.get(`/tracks/${id}`);
        return response.data;
      } catch (error) {
        console.error('API error:', error);
        throw error;
      }
    };

  return (
  
      <div className="musicRecommendations-card" onClick={()=>goToDetailPage(music.id)}>
        <img src={secondImage} alt={music.name}  />
      </div>


  );
};

export default MusicRecommendationsCard ;
