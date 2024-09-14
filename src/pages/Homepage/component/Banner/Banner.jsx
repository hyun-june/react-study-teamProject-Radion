import React, { useState, useEffect } from 'react';
import './Banner.style.css'
import { usePlaylistQuery} from '../../../../hooks/usePlaylists';
import { Alert } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Banner = () => {
  const { data: PlaylistData, isLoading, isError, error } = usePlaylistQuery();
  // console.log("이게 베너다", PlaylistData);
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % 10); // Assuming there are 10 images in total
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

  if (isLoading) {
      return <h1>Loading...</h1>;
  }
  if (isError) {
      return <Alert variant="danger">{error.message}</Alert>;
  }


  return (

    <div className='banner_area'>
    <div
        className='banner'
      >
         <Container>
          <img className="banner_img" src={PlaylistData.playlists.items[currentIndex].images[0].url} alt={`Playlist Cover`} />
         </Container>
    </div>
    </div>
  )
}

export default Banner
