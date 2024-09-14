import React, { useEffect, useState } from 'react'
import './TrackBox.style.css'
import TrackCard from './TrackCard/TrackCard';
import { Col} from 'react-bootstrap';

const TrackBox = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(6);

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
      {data?.slice(0, visibleItems).map((track, index) => (
        <Col lg={2} md={3} sm={4} xs={6} key={index}>
          <TrackCard track={track} />
        </Col>
      ))}
    </>
  );
};

export default TrackBox