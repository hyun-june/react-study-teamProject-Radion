import React from 'react'
import { usePlaylistQuery} from '../../../../hooks/usePlaylists';
import { Alert } from 'react-bootstrap';
import MusicPlaylistSlide from '../../../../common/MusicPlaylistSlide/MusicPlaylistSlide';

const MusicPlaylist = () => {
    const { data: PlaylistData, isLoading, isError, error } =  usePlaylistQuery();
    console.log("PlaylistData", PlaylistData);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }
  return (
    <div>
        <div>
         {PlaylistData&& <MusicPlaylistSlide PlaylistData={PlaylistData} />}
        </div>
    </div>
  )
}

export default MusicPlaylist
