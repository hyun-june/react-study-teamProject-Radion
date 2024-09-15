import React, { useEffect, useState } from 'react'
import './ArtistBox.style.css'
import { Col } from 'react-bootstrap';
import ArtistCard from './ArtistCard/ArtistCard';

const ArtistBox = ({artists}) => {
  const [visibleItems, setVisibleItems] = useState(6);
  console.log(artists)

  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width >= 992) {
      setVisibleItems(6); // lg: 6개
    } else if (width >= 768) {
      setVisibleItems(4); // md: 4개
    } else if (width >= 576) {
      setVisibleItems(3); // sm: 3개
    } else {
      setVisibleItems(2); // xs: 2개
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems); // 윈도우 리사이즈 이벤트 추가


    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  return (
    <>
      {artists?.slice(0, visibleItems)?.map((artist, index) => (
        <Col lg={2} md={3} sm={4} xs={6} key={index}>
          <ArtistCard artist={artist} />
        </Col>
      ))}
    </>
  );
};

export default ArtistBox
