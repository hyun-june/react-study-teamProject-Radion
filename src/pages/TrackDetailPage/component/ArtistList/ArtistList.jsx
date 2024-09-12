import React, { useEffect, useState } from 'react'
import './ArtistList.style.css'
import { Col, Row } from 'react-bootstrap';
import { useArtistListQuery } from './../../../../hooks/useArtistList';

const ArtistList = ({artists}) => {
  const [ids, setIds] = useState('');
  
  useEffect(() => {
    if (artists && artists.length > 0) {
      const ids = artists.map(artist => artist.id).join(',');
      setIds(ids);
    }
  }, [artists]);

  const {
    data: artistsData,
    isLoading,
    isError,
    error,
  } = useArtistListQuery({ ids });

  console.log(artistsData)

  return (
    <>
    {artistsData?.map((artist, index) => {
      return (
        <Row key={index}>
          <Col lg="2">
            <img className='artistList_profile' src={artist.images[2].url} alt=''></img>
          </Col>
          <Col lg="auto" className='artistList_row'>
            <div>
              <Row><div>Artist</div></Row>
              <Row><div>{artist.name}</div></Row>
            </div>
          </Col>
        </Row>
      );
    })}
     
    </>
  )
}

export default ArtistList
