import React from 'react';
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MusicNewReleasesSlide.style.css';
const MusicNewReleasestSlide= ({ NewReleasesData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 304 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }}
    console.log("여기가 종착지",NewReleasesData);
  return (
    <div>
         <div>
         <Container>
            <h2>NewReleasest items 8 90% me@</h2>
        </Container>
         <Carousel
              responsive={responsive}
              infinite={true}
              centerMode={true}
              containerClass = "carousel-container"
              itemClass = "movie-slider p-1"
             >
              { NewReleasesData.albums.items.map((item, index) => (
                  <div key={index} className="MusicNewReleases_image-card">
                      <img src={item.images[0].url} alt={item.name} />
                  </div>
              ))}

          </Carousel>
        </div>
    </div>
  );
};

export default MusicNewReleasestSlide;
