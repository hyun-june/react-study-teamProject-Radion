import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './TrackListPage.style.css'
import { usePlayListItems } from '../../hooks/usePlayListItems'
import TrackListTable from './TrackListTable/TrackListTable'

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

        <TrackListTable trackList={trackList}/>
      </Container>
    </div>
  )
}

export default TrackListPage