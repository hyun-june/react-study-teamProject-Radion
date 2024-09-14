import React from 'react'
import './PopularTrackTable.style.css'
import { Col, Row } from 'react-bootstrap';
import TrackAudioButton from '../../../../common/component/TrackAudioButton/TrackAudioButton';
import { useNavigate } from 'react-router-dom';

const PopularTrackTable = ({tracks}) => {
  const navigate = useNavigate();
  const visibleItems = 10;

  const toTrackDetailPage = (id, event) => {
    event.preventDefault();
    navigate(`/tracks/${id}`);

  }

  const toArtistDetailPage = (id, event) => {
    event.preventDefault();
    navigate(`/artists/${id}`);

  }
  console.log(tracks)
  return (
    <>
      {tracks?.slice(0, visibleItems).map((track, index) => {
        const duration = track?.duration_ms;
        const m = Math.floor(duration / 1000 / 60);
        const s = Math.floor(duration / 1000 - m * 60);
        return (
          <Row key={index + 1} className="tracktable_row">
            <Col lg={1} md={1} sm={1} xs={1} className="tracktable_center">
              <TrackAudioButton preview={track?.preview_url} index={index + 1}/>
            </Col>

            <Col lg={1} md={1} sm={2} xs={2} className="tracktable_center">
              <div><img className='tracktable_img' src={track?.album?.images[2]?.url} alt=''></img></div>
            </Col>

            <Col lg={9} md={8} sm={6} xs={6} className="mb-2">
              <Row>
                <div>
                  <span className="tracktable_title" onClick={(event) => toTrackDetailPage(track?.id, event)}>{track?.name}</span>
                </div>
              </Row>
              <div>
                {track?.artists.map((artist, index) => {
                  return (
                    <span className="tracktable_artist_name" key={index} onClick={(event) => toArtistDetailPage(artist?.id, event)}>{artist?.name}</span>
                  );
                })}
              </div>
            </Col>

            <Col lg={1} md={2} sm={3} xs={3} className="tracktable_center">
              {m} : {s.toString().length === 1 ? "0" + s.toString() : s}
            </Col>
          </Row>
        );
      })}
    </>
  )
}


export default PopularTrackTable
