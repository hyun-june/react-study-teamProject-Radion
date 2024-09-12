import React, { useEffect, useState } from "react";
import "./DetailPage.style.css";
import { useParams } from "react-router-dom";
import { useAlbumDetailQuery } from "../../hooks/useAlbumDetail";
import { Alert, Button, Col, Container, Modal, Row } from "react-bootstrap";
import TrackTable from "./component/TrackTable/TrackTable";
import { useArtistAlbumQuery } from "./../../hooks/useArtistAlbum";

const DetailPage = () => {
  // 5V8n6fqyAPxvFTibPhQVcp
  const id = "5V8n6fqyAPxvFTibPhQVcp";
  // const { id } = useParams();

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

  console.log(album);

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
    <div className="detailpage_body">
      <Container>
        <Row>
          <Col>
            <img
              className="detailpage_poster"
              src={album?.images[1].url}
              alt=""
              onClick={() => setLgShow(true)}
            />
          </Col>
          <Col>
            <Row className="detailpage_title">
              <div>{album?.name}</div>
            </Row>
            <Row>
              <Col>
                <div>
                  <span className="detailpage_artistName">{artistName}</span> • <span>{album?.release_date.slice(0, 4)}</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className="mt-3">
            <Button className="me-3" variant="light">
              플레이 버튼
            </Button>
            <Button variant="light">라이브러리 저장</Button>
          </Col>
        </Row>

        <TrackTable album={album} />






        <Row><div className="detailpage_more_albums mt-5">Watch more of {artistName}'s songs</div></Row>
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
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {album?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={album?.images[0].url} alt="" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DetailPage;
