import React from 'react'
import './ArtistCard.style.css'
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({artist}) => {
  const navigate = useNavigate();
  
  const toArtistDetailPage = (id, event) => {
    event.preventDefault();
    event.stopPropagation(); // 부모로 이벤트 전파 X
    navigate(`/artists/${id}`);
  }
  return (
    <div className='artistcard_card' onClick={(event) => toArtistDetailPage(artist.id,event)}>
      <div className='artistcard_wrapper'>
        <img src={artist?.images[0].url} alt='' className='artistcard_img'></img>
      </div>
      <div>{artist?.name}</div>
      <div><span className='artistcard_artist'>Artist</span></div>
    </div>
  )
}

export default ArtistCard
