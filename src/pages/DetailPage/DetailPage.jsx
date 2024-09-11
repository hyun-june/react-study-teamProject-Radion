import React from "react";
import "./DetailPage.style.css";
import { useParams } from "react-router-dom";
import { useAlbumDetailQuery } from "../../hooks/useAlbumDetail";
import { Button, Col, Container, Row } from "react-bootstrap";

const DetailPage = () => {
  // 5V8n6fqyAPxvFTibPhQVcp
  const id = "5V8n6fqyAPxvFTibPhQVcp";
  // const { id } = useParams();
  const {
    data: album,
    isLoading,
    isError,
    error,
  } = useAlbumDetailQuery({ id });

  console.log(album);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div className="detailpage_body">
      <Container>
        <Row className="detailpage_poster">
          <div>
            <img src={album?.images[0].url} />
          </div>
        </Row>
        <Row className="detailpage_info">
          <Col>
            <Row>
              <Col lg="2">아티스트</Col>
              <Col lg="10">{album?.artists[0].name}</Col>
            </Row>
            <Row>
              <Col lg="2">참여 정보</Col>
              <Col lg="10">참여 정보</Col>
            </Row>
            <Row>
              <Col lg="2">앨범</Col>
              <Col lg="10">{album?.name}</Col>
            </Row>
            <Row>
              <Col lg="2">재생 시간</Col>
              <Col lg="10">재생 시간</Col>
            </Row>
            <Row>
              <Col lg="2">고음질</Col>
              <Col lg="10">고음질</Col>
            </Row>
            <Row>
              <Col lg="1">
                <Button variant="light">듣기</Button>
              </Col>
              <Col lg="1">
                <Button variant="light">재생목록에 추가</Button>
              </Col>
              <Col lg="1">
                <Button variant="light">내 앨범에 담기</Button>
              </Col>
              <Col lg="1">
                <Button variant="light">다운로드</Button>
              </Col>
              <Col lg="1">
                <Button variant="light">라디오 듣기</Button>
              </Col>
              <Col lg="auto"></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPage;
