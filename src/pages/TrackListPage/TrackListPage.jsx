import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './TrackListPage.style.css'
import { usePlayListItems } from '../../hooks/usePlayListItems'

const TrackListPage = () => {
    const {data} = usePlayListItems();
    const trackList = data ? data.slice(0, 9) : [];
    console.log("11",trackList)
    const index = 0;

  return (
    <div className='musicplayer-container'>
      <Container>
        <Row>
          <Col className='playList-preview'>
            <img width={500} src="https://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"/>
            <h5 className='preview_title'>[PLAY LIST] l 지금 몇시야? 해쉬? 해쉬스완(Hash Swan) 노래모음 l</h5>
          </Col>
        </Row>
        <Row>
        </Row>

        <Row className="mt-5 ">
          <Col lg="1" className="tracktable_center">#</Col>
          <Col lg="1">Title</Col>
          <Col lg="9"></Col>
          <hr />
          <Row>
                <Col lg="1" className="tracktable_center">
                    {index + 1}
                </Col>
                <Col lg="8" className="mb-2">
                    <div>
                    {trackList && trackList.length > 0 ? (
                    <div>{trackList[0].track.name}</div>
                    ) : (
                    <div>Loading...</div>
                    )}
                    </div>
                </Col>
                <Col>
                    <div>
                        {trackList && trackList.length > 0 ? (
                        <div>{trackList[0].track.artists[0].name}</div>
                        ) : (
                        <div>Loading...</div> 
                        )}
                    </div>
                </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default TrackListPage