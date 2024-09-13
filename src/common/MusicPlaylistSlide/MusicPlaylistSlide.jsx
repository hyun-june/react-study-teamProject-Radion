import React from 'react'
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MusicPlaylistSlide.style.css';
import MusicPlaylistCard from '../MusicCard/MusicPlaylistCard';

const MusicPlaylistSlide = ({ PlaylistData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };
  return (
    <div>
            <Container>
            <h2 className='MusicPlaylistSlide_title'>PopularMusicPlaylist</h2>
            </Container>
            <Carousel
              responsive={responsive}
              infinite={true}
              centerMode={true}
              containerClass = "carousel-container"
              itemClass = "movie-slider p-1"
             >
                {PlaylistData.playlists.items.map((playlist, index)  => (
                     <li key={index}>
                        {/* <img src={playlist.images[0].url} alt={`Playlist Cover`} 
                                      style={{ width: '300px', height: '300px' }}
                                      /> */}
                                    
                        {/* <strong>Name:</strong> {playlist.name}<br />
                        <strong>Description:</strong> {playlist.description} <br />
                        <strong>Collaborative:</strong> {playlist.collaborative ? "Yes" : "No"}<br /> */}
                        <MusicPlaylistCard playlist={playlist}/>
                    </li>
                ))}
           </Carousel>
    </div>
  )
}

export default MusicPlaylistSlide
