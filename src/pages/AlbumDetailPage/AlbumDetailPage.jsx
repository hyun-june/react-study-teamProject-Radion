import React, { useEffect, useState } from "react";
import "./AlbumDetailPage.style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAlbumDetailQuery } from "../../hooks/useAlbumDetail";
import { Alert, Col, Container, Modal, Row } from "react-bootstrap";
import { useArtistAlbumQuery } from "../../hooks/useArtistAlbum";
import AudioPlayerButton from "../../common/component/AudioPlayerButton/AudioPlayerButton";
import TrackBox from "../../common/component/TrackBox/TrackBox";
import TrackTable from './component/TrackTable/TrackTable';

const AlbumDetailPage = () => {
  const id = "5V8n6fqyAPxvFTibPhQVcp";
  // const { id } = useParams();
  const navigate = useNavigate();

  const [lgShow, setLgShow] = useState(false);
  const [artistId, setArtistId] = useState(null);
  const [artistName, setArtistName] = useState(null);

  const toArtistDetailPage = (id, event) => {
    event.preventDefault();
    navigate(`/artists/${id}`);

  }

  const {
    data: album,
    isLoading,
    isError,
    error,
  } = useAlbumDetailQuery({ id });

  useEffect(() => {
    // album, artists, 그리고 artists[0].id가 존재하는지 확인
    if (album && Array.isArray(album.artists) && album.artists.length > 0 && album.artists[0]?.id) {
      setArtistId(album.artists[0].id);
      setArtistName(album.artists[0].name);
    }
  }, [album]);

  const {
    data: artistAlbum,
    isLoading: aAIsLoading,
    isError: aAIsError,
    error: aAError,
  } = useArtistAlbumQuery(artistId);

  if (isLoading || aAIsLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  if (aAIsError) {
    return <Alert variant="danger">{aAError.message}</Alert>;
  }

  return (
    <div className="albumdetailpage_body">
      <Container>
        <Row>
          <Col  lg="4" md="6" sm="12" xs="12">
            <img
              className="albumdetailpage_poster"
              src={album?.images[1].url}
              alt=""
              onClick={() => setLgShow(true)}
            />
          </Col>
          <Col lg="4" md="6" sm="12" xs="12">
            <Row className="albumdetailpage_type mt-4">
            <div>Album</div>
              {/* <div>{album?.album_type.charAt(0).toUpperCase() + album?.album_type.slice(1)}</div> */}
            </Row>
            <Row className="albumdetailpage_title mt-1">
              <div>{album?.name}</div>
            </Row>
            <Row>
              <Col>
                <div>
                  <span className="albumdetailpage_artistName" onClick={(event) => toArtistDetailPage(artistId,event)}>{artistName}</span> • <span>{album?.release_date.slice(0, 4)}</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className="mt-3">
            <AudioPlayerButton preview={album?.tracks.items[0].preview_url}/>
          </Col>
        </Row>

        <TrackTable album={album} />






        <Row><div className="mt-5"><span className="albumdetailpage_more_albums" onClick={(event) => toArtistDetailPage(artistId,event)}>Watch more of {artistName}'s songs</span></div></Row>
        <Row>
          <TrackBox data={artistAlbum?.items}/>
          
        </Row>













      </Container>

      {/** 포스터 modal */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="albumdetailpage_modal_header">
        </Modal.Header>
        <Modal.Body className="albumdetailpage_modal_body">
          <img src={album?.images[0].url} alt="" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AlbumDetailPage;
