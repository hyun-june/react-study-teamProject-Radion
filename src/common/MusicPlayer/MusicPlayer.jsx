// import React, { useEffect, useState } from 'react';
// import youtubeApi from '../../utils/youtubeApi';
// import api from '../../utils/api';
// import { useSearchSpotifyMusic } from '../../hooks/useSearchSpotify';
// import { useSearchParams } from 'react-router-dom';
// import ReactPlayer from 'react-player';
// import { useNewReleasesAlbums } from '../../hooks/useNewReleases';
// import './MusicPlayer.css'
// import { Col, Container, Row } from 'react-bootstrap';
// import { usePlayListItems } from '../../hooks/usePlayListItems';
// import { usePlaylistQuery } from '../../hooks/usePlaylists';

// const MusicPlayer = () => {
//   const [videoList, setVideoList] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [selectedAlbum,setSelectedAlbum] = useState(null)
//   const [playing,setPlaying] = useState(false)
//   const [playerUrl, setPlayerUrl] = useState('');
//   const keyword = searchParams.get("q")

//   const musicPlay = () =>{
//     setPlaying(!playing);
//   }

//   const {data} = useSearchSpotifyMusic({keyword});
//   const {data:newAlbumsData} = useNewReleasesAlbums();
//   const {data:playListData} = usePlaylistQuery();

//   const trackName = selectedAlbum ? selectedAlbum.artists[0]?.name : '';
//   const trackTitle = selectedAlbum ? selectedAlbum.name : '';

//   // console.log(trackName,trackTitle)
//   // console.log("Album",newAlbumsData)
//   // console.log("이름은",trackName)
//   // console.log("spotify TrackData:",data)
//   // console.log(keyword)

//   const getSearchValue = (e) => {
//     setSearchParams({q:e.target.value})
//   };

//   const searchByKeyword = (e) =>{
//     getYoutubeVideos()
//   }

//   const getSelectAlbum = (album)=>{
//     setSelectedAlbum(album)
//     getYoutubeVideos();
//     setPlaying(false)
//   }  

// const getYoutubeVideos = async () => {
//     try {
//         const res = await youtubeApi.get('search', {
//             params: {
//                 part: 'snippet',
//                 q: `${trackName} ${trackTitle}`,
//                 market : 'kr',
//                 maxResults: 48
//             },
//         });
//         console.log("youtubeData:",res.data.items);
//         setVideoList(res.data.items);
//         if (res.data.items.length > 0) {
//           setPlayerUrl(`https://www.youtube.com/watch?v=${res.data.items[0]?.id.videoId}`);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// useEffect(() => {
//   if (videoList.length > 0) {
//     setPlayerUrl(`https://www.youtube.com/watch?v=${videoList[0]?.id.videoId}`);
//   }
// }, [videoList]);

// useEffect(() => {
//   if (selectedAlbum) {
//     getYoutubeVideos();
//   }
// }, [selectedAlbum]);

//   useEffect(() => {
//     if (keyword) {
//       getYoutubeVideos();
//     }
//   }, []);

//   return (
//     <div className='musicplayer-container'>
//       {selectedAlbum && (
//         <div className='selected-album-info'>
//           <img width={200} src={selectedAlbum.images[0]?.url}/>
//           <div>{selectedAlbum.name}</div>
//           <div>{selectedAlbum.artists[0]?.name}</div>
//         </div>
//       )}
//       <div className='album-box'>
//       {newAlbumsData?.map((album)=><div onClick={() => getSelectAlbum(album)}>
//         <img width={100} style={{ margin: "10px" }} src={album.images[0]?.url}/>
//         <div>{album.name}</div>
//         <div>{album.artists[0]?.name}</div>
//         </div>)}
//       </div>
//       {videoList.length > 0? <img src={videoList[0]?.snippet?.thumbnails?.default?.url} /> : " " }
//       <ReactPlayer
//         url={`https://www.youtube.com/watch?v=${videoList[1]?.id.videoId}`}
//         playing={playing} // 자동 재생
//         volume={0.5} // 볼륨 설정
//         controls={false} // 비디오 컨트롤러 숨기기
//         width="0" // 비디오의 너비를 0으로 설정
//         height="0" // 비디오의 높이를 0으로 설정
//         config={{
//           youtube: {
//             playerVars: { 
//               modestbranding: 1, // 최소한의 브랜딩
//               controls: 0, // 컨트롤 숨기기
//               playsinline: 1, // 인라인 재생
//             }
//           }
//         }}
//       />
//       <input type="text" value={keyword} onChange={getSearchValue}/>
//       <button onClick={searchByKeyword}>Search</button>
//       <button onClick={musicPlay}>
//         {playing ? 'Pause' : 'Play'}
//       </button>

//     </div>
//   );
// };

// export default MusicPlayer;
