import React from 'react';
import { useMusicAlbumsQuery } from '../../../../hooks/useMusicAlbums';
import { Alert } from 'react-bootstrap';
import MusicRecommendationsSlide from '../../../../common/MusicRecommendationsSlide/MusicRecommendationsSlide';

const MusicAlbum = () => {
    const { data: albumData, isLoading, isError, error } = useMusicAlbumsQuery();
    console.log("MusicSlide", albumData);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return (

        <>
        <div>
           {albumData && <MusicRecommendationsSlide albumData={albumData} />}
        </div>

        </>
    );
};

export default MusicAlbum;
