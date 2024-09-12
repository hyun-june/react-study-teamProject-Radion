import React from "react";
import "./TrackTable.style.css";
import { Col, Row } from "react-bootstrap";

const TrackTable = ({ album }) => {
  return (
    <>
      <Row className="mt-5">
        <Col lg="1" className="tracktable_center">#</Col>
        <Col lg="1">Title</Col>
        <Col lg="9"></Col>
        <Col lg="1" className="tracktable_center">RunTime</Col>
      </Row>
      <hr />
      {album?.tracks.items.map((newAlbum, index) => {
        const duration = newAlbum?.duration_ms;
        const m = Math.floor(duration / 1000 / 60);
        const s = Math.floor(duration / 1000 - m * 60);
        return (
          <Row key={index + 1}>
            <Col lg="1" className="tracktable_center">{index + 1}</Col>

            <Col lg="10" className="mb-2">
              <Row>
                {newAlbum?.name}
              </Row>
              <div>
                {newAlbum?.artists.map((artist, index) => {
                  return (
                    <span className="tracktable_artist_name" key={index}>{artist?.name}</span>
                  );
                })}
              </div>
            </Col>

            <Col lg="1" className="tracktable_center">
              {m} : {s.toString().length === 1 ? "0" + s.toString() : s}
            </Col>
          </Row>
        );
      })}
      <Row></Row>
    </>
  );
};

export default TrackTable;
