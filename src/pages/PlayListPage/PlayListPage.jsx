import React, { useEffect, useState } from 'react';
import youtubeApi from '../../utils/youtubeApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSearchParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Col, Container, Row } from 'react-bootstrap';
import "./PlayListPage.style.css"
import { faPause, faPlay, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer = () => {
  const [videoList, setVideoList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [playerUrl, setPlayerUrl] = useState('');
  const [keywordInput, setKeywordInput] = useState(''); // 입력값을 관리하는 상태
  const keyword = searchParams.get("q");

  const musicPlay = () => {
    setPlaying(!playing);
  }

  console.log(videoList)

  const keywordChange = (e) => {
    setKeywordInput(e.target.value);
  };

  const keydownSearch = (e) =>{
    if(e.key === 'Enter'){
      e.preventDefault();
      searchByKeyword();
    }
  }

  const searchByKeyword = () => {
    setSearchParams({ q: keywordInput }); // 버튼 클릭 시에만 쿼리 파라미터 업데이트
    setKeywordInput("")
  }

  const getSelectVideo = (video) => {
    if (video && video.id.kind === 'youtube#video') {
      setSelectedVideo(video);
      setPlayerUrl(`https://www.youtube.com/watch?v=${video.id.videoId}`);
      setPlaying(false); // 비디오를 선택할 때 자동으로 재생을 멈춥니다.
    } else {
      console.log("선택한 비디오는 재생할 수 없습니다.");
    }
  };

  const getYoutubeVideos = async () => {
    try {
      const res = await youtubeApi.get('search', {
        params: {
          part: 'snippet',
          q: `${keyword? keyword : "pop"} 플레이리스트`,
          maxResults: 10,
          publishedAfter: "2024-01-01T00:00:00Z",
          type: "video",
          videoSyndicated: "true"
        },
      });
      setVideoList(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(keyword)
  useEffect(() => {
    if (!keyword) {
      setSearchParams({ q: "pop" })
    } else {
      getYoutubeVideos();
    }
  }, [setSearchParams]);
console.log(selectedVideo)
  return (
    <div className='musicplayer-container'>
      <Container>
        <div className='musicplayer_searcharea'>
          <input 
            className='musicplayer_input' 
            type="text" 
            value={keywordInput} 
            onChange={keywordChange} 
            placeholder='Search'
            onKeyDown={keydownSearch}
          />
          <button 
            className='musicplayer_searchIcon' 
            onClick={searchByKeyword}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <Row>
          <Col className='playList-preview'>
            {selectedVideo? <img width={500} src={selectedVideo.snippet.thumbnails.high.url}/> : ""}
            <h5 className='preview_title'>{selectedVideo?.snippet?.title}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className='play-button' onClick={musicPlay}>
              <span className="play-icon">{playing ? <FontAwesomeIcon className='pause-icon' icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</span>
            </button>
          </Col>
        </Row>

        <Row className="mt-5 ">
          <Col lg="1" className="tracktable_center">#</Col>
          <Col lg="1">Title</Col>
          <Col lg="9"></Col>
          <hr />
          <Row className="video_list_row">
            <div className='video-list'>
              {videoList.map((video) => (
                <div key={video.id.videoId} className='videoList_table' onClick={() => getSelectVideo(video)}>
                  <img width={120} style={{ margin: "10px" }} src={video.snippet?.thumbnails?.default?.url} alt="Video Thumbnail" />
                    <div className='videoList_table_title'>{video.snippet?.title}</div>
                </div>
              ))}
            </div>
          </Row>
        </Row>
      </Container>

      <ReactPlayer
        url={playerUrl}
        playing={playing} // 자동 재생
        volume={0.5} // 볼륨 설정
        controls={false} // 비디오 컨트롤러 숨기기
        width="0" // 비디오의 너비를 0으로 설정
        height="0" // 비디오의 높이를 0으로 설정
        config={{
          youtube: {
            playerVars: { 
              modestbranding: 1, // 최소한의 브랜딩
              controls: 0, // 컨트롤 숨기기
              playsinline: 1, // 인라인 재생
            }
          }
        }}
      />
    </div>
  );
};

export default MusicPlayer;
