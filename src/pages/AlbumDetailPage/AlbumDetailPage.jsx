import React, { useEffect, useState } from "react";
import "./AlbumDetailPage.style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAlbumDetailQuery } from "../../hooks/useAlbumDetail";
import { Alert, Button, Col, Container, Modal, Row } from "react-bootstrap";
import TrackTable from "./component/TrackTable/TrackTable";
import { useArtistAlbumQuery } from "../../hooks/useArtistAlbum";
import AudioPlayerButton from "../../common/component/AudioPlayerButton/AudioPlayerButton";

const AlbumDetailPage = ({id}) => {
  // TODO. useParams 쓰는걸로 바꿔야 함.
  // const id = "5V8n6fqyAPxvFTibPhQVcp";
  //  const { id } = useParams();
  // const navigate = useNavigate();

  const [lgShow, setLgShow] = useState(false);
  const [artistId, setArtistId] = useState(null);
  const [artistName, setArtistName] = useState(null);

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
 
  // console.log(album);

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
          <Col>
            <img
              className="albumdetailpage_poster"
              src={album?.images[1].url}
              alt=""
              onClick={() => setLgShow(true)}
            />
          </Col>
          <Col>
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
                  <span className="albumdetailpage_artistName">{artistName}</span> • <span>{album?.release_date.slice(0, 4)}</span>
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






        <Row><div className="albumdetailpage_more_albums mt-5">Watch more of {artistName}'s songs</div></Row>
        <Row>
          <Col>
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
          </Col>
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
