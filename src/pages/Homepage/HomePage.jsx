import React from 'react'
import Banner from './component/Banner/Banner'
import MusicAlbum from './component/MusicAlbum/MusicAlbum';
import MusicNewReleases from './component/MusicNewReleases/MusicNewReleases';
import MusicPlaylist from './component/MusicPlaylist/MusicPlaylist';
// import "./HomePage.style.css";

const HomePage = () => {
  return (
    <div>
      <div className='homepage_container' style={{backgroundColor:"#1f1f1f"}}>
      홈페이지 입니다
      <Banner/>
      <MusicPlaylist/>
      <MusicNewReleases/>
      <MusicAlbum/>
      </div>
    </div>
  )
}

export default HomePage
