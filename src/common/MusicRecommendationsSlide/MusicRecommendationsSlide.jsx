import React from 'react';
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MusicRecommendationsCard from '../MusicCard/MusicRecommendationsCard';
import './MusicRecommendationsSlide.style.css'
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

  }}
const MusicRecommendationsSlide = ({ albumData }) => {
    return (
        <>
          <Container>
            <h2 className = 'RecommendationsMusic_title'>Recommendations</h2>
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
                {/* <img src={track.album.images[1].url} alt={`Second Image`}  style={{ width: '300px', height: '300px' }}/> */}
                < MusicRecommendationsCard key={index} music={track}  />
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

export default MusicRecommendationsSlide;
