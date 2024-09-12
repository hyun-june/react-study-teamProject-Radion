import React from 'react'
import Banner from './component/Banner/Banner'
import { useNewReleasesAlbums } from '../../hooks/useNewReleases';

const HomePage = () => {
  const {data} = useNewReleasesAlbums();
  console.log(data)
  return (
    <div>
      <Banner/>
    </div>
  )
}

export default HomePage
