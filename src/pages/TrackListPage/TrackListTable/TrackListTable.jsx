import React from "react";
import "./TrackListTable.style.css";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TrackAudioButton from "../../../common/component/TrackAudioButton/TrackAudioButton";


const TrackListTable = ({ trackList }) => {
  const navigate = useNavigate();
  const visibleItems = 10;

  const toTrackDetailPage = (id, event) => {
    event.preventDefault();
    navigate(`/tracks/${id}`);

  }
  
  return (
    <>
      <Row className="mt-5">
        <Col lg={1} md={1} sm={1} xs={1} className="tracklisttable_center">#</Col>
        <Col lg={1} md={1} sm={6} xs={6}>Title</Col>
        <Col lg={9} md={8} sm={1} xs={1}></Col>
        <Col lg={1} md={2} sm={4} xs={4} className="tracklisttable_center">Artist</Col>
      </Row>
      <hr />
      {trackList?.slice(0, visibleItems).map((item, index) => {
        const newTrack = item.track;
        const duration = newTrack?.duration_ms;
        const m = Math.floor(duration / 1000 / 60);
        const s = Math.floor(duration / 1000 - m * 60);
        return (
          <Row key={index + 1} className="tracklisttable_row">
            <Col lg={1} md={1} sm={1} xs={1} className="tracklisttable_center">
              <TrackAudioButton preview={newTrack?.preview_url} index={index + 1}/>
            </Col>

            <Col lg={10} md={9} sm={7} xs={7} className="mb-2">
              <Row>
                <div>
                  <span className="tracklisttable_title" onClick={(event) => toTrackDetailPage(newTrack?.id,event)}>{newTrack?.name}</span>
                </div>
              </Row>
              <div>
                {newTrack?.artists.map((artist, index) => {
                  return (
                    <span className="tracklisttable_artist_name" key={index}>{artist?.name}</span>
                  );
                })}
              </div>
            </Col>

            <Col lg={1} md={2} sm={4} xs={4} className="tracklisttable_center">
              {m} : {s.toString().length === 1 ? "0" + s.toString() : s}
            </Col>
          </Row>
        );
      })}
      <Row></Row>
    </>
  );
};

export default TrackListTable;
