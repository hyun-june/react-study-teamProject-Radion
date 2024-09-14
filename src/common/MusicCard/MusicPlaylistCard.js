
import './MusicPlaylistCard.style.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MusicPlaylistCard = ({ playlist }) => {
    // console.log('playlist', playlist);
    const navigate = useNavigate();
    const secondImage = playlist?.images?.[0]?.url;
    const goToDetailPage = (id) => {
        navigate(`/tracks/${playlist.id}`);
      }
  

    return (
        <div>
            {secondImage && <img src={secondImage} alt={playlist.name}onClick={goToDetailPage}/>}
        </div>
    );
}

export default MusicPlaylistCard;
