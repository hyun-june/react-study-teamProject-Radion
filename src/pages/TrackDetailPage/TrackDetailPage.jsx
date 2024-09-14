import React, { useEffect, useState } from "react";
import "./TrackDetailPage.style.css";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Col, Container, Modal, Row } from "react-bootstrap";
import { useTrackDetailQuery } from './../../hooks/useTrackDetail';
import AudioPlayerButton from "../../common/component/AudioPlayerButton/AudioPlayerButton";
import ArtistTable from "./component/ArtistTable/ArtistTable";

const TrackDetailPage = ({id}) => {
  // const id = "4twllsTUoTAFxiVeq3bNjq";
  // const { id } = useParams();
  const navigate = useNavigate();

  const [lgShow, setLgShow] = useState(false);
  const [artistId, setArtistId] = useState(null);
  const [artistName, setArtistName] = useState(null);

  const {
    data: track,
    isLoading,
    isError,
    error,
  } = useTrackDetailQuery({ id });

  useEffect(() => {
    // album, artists, 그리고 artists[0].id가 존재하는지 확인
    if (track && Array.isArray(track.artists) && track.artists.length > 0 && track.artists[0]?.name) {
      setArtistId(track.artists[0].id);
      setArtistName(track.artists[0].name);
    }
  }, [track]);
 
  console.log(track);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const duration = track?.duration_ms;
  const m = Math.floor(duration / 1000 / 60);
  const s = Math.floor(duration / 1000 - m * 60);

  return (
    <div className="trackdetailpage_body">
      <Container>
        <Row>
          <Col>
            <img
              className="trackdetailpage_poster"
              src={track?.album.images[1].url}
              alt=""
              onClick={() => setLgShow(true)}
            />
          </Col>
          <Col>
            <Row className="trackdetailpage_type mt-4">
              <div>Track</div>
            </Row>
            <Row className="trackdetailpage_title mt-1">
              <div>{track?.name}</div>
            </Row>
            <Row>
              <Col>
                <div>
                  <span className="trackdetailpage_artistName">{artistName}</span> • <span>{track?.album.release_date.slice(0, 4)}</span> • <span>{m}:{s}</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className="mt-3">
            <AudioPlayerButton preview={track?.preview_url}/>
          </Col>
        </Row>

        <div className="mt-3">
          <ArtistTable artists={track?.artists}/>
        </div>


        <Row><div className="trackdetailpage_more_albums mt-5">Watch more of {artistName}'s songs</div></Row>
        <Row>
          {/* <Col>
            <img src={artistAlbum?.items[0].images[1].url} alt=""/>
            <div>{artistAlbum?.items[0].name}</div>
          </Col>
          <Col>
            <img src={artistAlbum?.items[1].images[1].url} alt=""/>
            <div>{artistAlbum?.items[1].name}</div>
          </Col>
          <Col>
            <img src={artistAlbum?.items[2].images[1].url} alt=""/>
            <div>{artistAlbum?.items[2].name}</div>
          </Col> */}
        </Row>













      </Container>

      {/** 포스터 modal */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="trackdetailpage_modal"
      >
        <Modal.Header closeButton className="trackdetailpage_modal_header">
          
        </Modal.Header>
        <Modal.Body className="trackdetailpage_modal_body">
          <img src={track?.album.images[0].url} alt="" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TrackDetailPage
