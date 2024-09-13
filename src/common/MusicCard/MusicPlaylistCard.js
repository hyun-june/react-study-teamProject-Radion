
import './MusicPlaylistCard.style.css';

import React from 'react';

const MusicPlaylistCard = ({ playlist }) => {
    console.log('playlist', playlist);

    const secondImage = playlist?.images?.[0]?.url;


    return (
        <div>
            {secondImage && <img src={secondImage} alt={playlist.name} />}
        </div>
    );
}

export default MusicPlaylistCard;
