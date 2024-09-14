import React from 'react'
import './ArtistDetailPage.style.css'
import { useArtistDetailQuery } from './../../hooks/useArtistDetail';

const ArtistDetailPage = () => {
  const {
    data: artist,
    isLoading,
    isError,
    error,
  } = useArtistDetailQuery();
  return (
    <div>
      
    </div>
  )
}

export default ArtistDetailPage
