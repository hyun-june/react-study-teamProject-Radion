import React from 'react';
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,

  }}
const MusicSlide = ({ albumData }) => {
    return (
        <>
          <Container>
            <h2>RecommendationsMusic spotify_img 2 items 10</h2>
            </Container>
            <Carousel
                responsive={responsive}
                infinite={true}
                centerMode={true}
                containerClass="carousel-container"
                itemClass="movie-slider p-1"
              >
            {albumData.tracks.map((track, index) => (
              <div key={index}>
                <img src={track.album.images[2].url} alt={`Second Image`} />
                {/* <strong>Name:</strong> {track.album.name}<br />
                <strong>Duration:</strong> {track.duration_ms} ms<br />
                <strong>Popularity:</strong> {track.popularity}<br /> */}
                {/* Add any further image display logic here if needed */}
              </div>
            ))}
            </Carousel>
        </>
    );
};

export default MusicSlide;
