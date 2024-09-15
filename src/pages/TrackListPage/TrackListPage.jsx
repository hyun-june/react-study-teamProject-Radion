import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './TrackListPage.style.css'
import { usePlayListItems } from '../../hooks/usePlayListItems'
import TrackListTable from './TrackListTable/TrackListTable'
import { useLocation, useParams } from 'react-router-dom'

const TrackListPage = () => {
    const {id} = useParams();
    const {data} = usePlayListItems({id});
    const trackList = data ? data.slice(0, 20) : [];
    const location = useLocation();
    const secondImage = location.state?.secondImage;
    const playlistName = location.state?.playlistName;
    const index = 0;

  return (
    <div className='musicplayer-container'>
      <Container>
        <Row>
          <Col className='playList-preview'>
            <img className='playlist_preview_img' src={secondImage}/>
            <h5 className='preview_title'>{playlistName}</h5>
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