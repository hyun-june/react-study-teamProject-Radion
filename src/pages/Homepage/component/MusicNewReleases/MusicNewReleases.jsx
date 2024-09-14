import React, {  useState } from 'react';
import { useMusicNewReleasestQuery } from '../../../../hooks/useMusicNewReleases';
import { Alert} from 'react-bootstrap';
import MusicNewReleasesSlide from '../../../../common/MusicNewReleasesSlide/MusicNewReleasesSlide';
import './MusicNewReleases.style.css';

const MusicNewReleases = () => {
    const { data: NewReleasesData, isLoading, isError, error } = useMusicNewReleasestQuery();
    //  console.log("MusicNewReleases여기까지 왓나.", NewReleasesData);
     if(isLoading){
        return <h1>Loading...</h1>
      }
      if(isError){
        return <Alert variant="danger">{error.message}</Alert>;
      }
     return (
        <div>
            <div >
            {NewReleasesData&&
                <MusicNewReleasesSlide className='MusicNewReleases' NewReleasesData={NewReleasesData} />
            }
        </div>
    </div>
    );

}

export default MusicNewReleases
