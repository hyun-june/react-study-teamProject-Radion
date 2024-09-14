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
      breakpoint: { max: 1830, min: 464 },
      items: 4,
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
            <h2 className='MusicPlaylistSlide_title'>Popular Music Playlists</h2>
            </Container>
            <Carousel
              responsive={responsive}
              infinite={true}
              centerMode={true}
              containerClass = "carousel-container"
              itemClass = "movie-slider p-1"
             >
                {PlaylistData.playlists.items.map((playlist, index)  => (
                    <MusicPlaylistCard playlist={playlist} key={index} />
                ))}
           </Carousel>
    </div>
  )
}

export default MusicPlaylistSlide
