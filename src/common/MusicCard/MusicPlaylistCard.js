
import './MusicPlaylistCard.style.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MusicPlaylistCard = ({ playlist }) => {
    const navigate = useNavigate();
    const secondImage = playlist?.images?.[0]?.url;
    const goToDetailPage = (id, event) => {
        event.preventDefault();
        navigate(`/list/${id}`);
      }

  

    return (
        <div className='Playlist_img'>
            {secondImage && <img src={secondImage} alt={playlist.name} onClick={(event) => goToDetailPage(playlist.id, event)}/>}
        </div>
    );
}

export default MusicPlaylistCard;
