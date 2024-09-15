import React from 'react'
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import { Alert } from 'bootstrap/dist/js/bootstrap.bundle.min';
import { useArtistDataQuery } from '../../hooks/useArtistData';
import "./ArtistSlide.style.css"
import { useNavigate } from 'react-router-dom';

const ArtistSlide = () => {
    const id = [
        "3HqSLMAZ3g3d5poNaI7GOU",
        "0du5cEVh5yTK9QJze8zA0C",
        "6VuMaDnrHyPL1p4EHjYLi7",
        "1uNFoZAHBGtllmzznpCI3s",
        "246dkjvS1zLTtiykXe5h60",
        "06HL4z0CvFAxyc27GXpf02",
        "6qqNVTkY8uBg9cP3Jd7DAH",
        "6HvZYsbFfjnjFrWF950C9d"
    ];

    const navigate = useNavigate();

    const toArtistDetailPage = (id,event)=>{
        event.preventDefault();
        navigate(`/artists/${id}`)
    }

    const {data , isLoading, isError, error} = useArtistDataQuery(id);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

  return (
    <div>
         <Container>
            <h2 className='MusicPlaylistSlide_title'>Artists</h2>
        </Container>
        <div className='artists_section'>
                {data.map((artist) => (
                        <div className='artists_area'>
                            <img src={artist.images[2]?.url} alt={artist.name} className='artists_img' onClick={(event)=>toArtistDetailPage(artist.id,event)} />
                            <h3>{artist.name}</h3>
                        </div>
                    ))}
            </div>
    </div>
  )
}

export default ArtistSlide