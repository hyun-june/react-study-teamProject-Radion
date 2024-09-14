import React, { useEffect, useState } from 'react'
import './ArtistTable.style.css'
import { Col, Row } from 'react-bootstrap';
import { useArtistListQuery } from '../../../../hooks/useArtistList';

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

  return (
    <>
    {artistsData?.map((artist, index) => {
      return (

        <Row key={index} className='mt-3 artisttable_row'>
          <Col lg="2" md="2" sm="3" xs="3">
            <img className='artistList_profile' src={artist?.images[2]?.url || `${process.env.PUBLIC_URL}/noImage.png`} alt=''></img>
          </Col>
          <Col lg="auto" md="auto" sm="auto" xs="auto" className='artistList_row'>
            <div>
              <Row><div>Artist</div></Row>
              <Row><div><span className='artisttable_artist_name'>{artist?.name}</span></div></Row>
            </div>
          </Col>
        </Row>

      );
    })}
     
    </>
  )
}

export default ArtistList
