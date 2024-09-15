import React from 'react'
import Banner from './component/Banner/Banner'
import MusicAlbum from './component/MusicAlbum/MusicAlbum';
import MusicNewReleases from './component/MusicNewReleases/MusicNewReleases';
import MusicPlaylist from './component/MusicPlaylist/MusicPlaylist';
import './HomePage.style.css'
import ArtistSlide from '../../common/ArtistSlide/ArtistSlide';


const HomePage = () => {
  return (
    <div>
      <div className='hompage_container'>
    
      <Banner/>
      <ArtistSlide />
      <MusicPlaylist/>
      <MusicNewReleases/>
      {/* <MusicAlbum/> */}
      </div>
    </div>
  )
}

export default HomePage
