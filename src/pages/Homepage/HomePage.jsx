import React from 'react'
import Banner from './component/Banner/Banner'
import MusicAlbum from './component/MusicAlbum/MusicAlbum';
import MusicNewReleases from './component/MusicNewReleases/MusicNewReleases';
import MusicPlaylist from './component/MusicPlaylist/MusicPlaylist';
import './HomePage.style.css'

const HomePage = () => {
  // const{
  //   data
  // } = usePopularMusicQuery();
  // console.log("usePopularMusicQuery",data);
  return (
    <div>
      <div className='hompage_container'>
    
      <Banner/>
      <MusicPlaylist/>
      <MusicNewReleases/>
      <MusicAlbum/>
      </div>
    </div>
  )
}

export default HomePage
