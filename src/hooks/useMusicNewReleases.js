// Assuming you are using Axios for making HTTP requests

import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchMusicNewReleasest = async () => {
    try {
        const response = await api.get('/browse/new-releases', {
            params: {
                limit: 10,
                market: 'KR',
                local: 'ko_KR',
                seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
                // seed_genres: 'classical,country',
                seed_tracks: '0c6xIDDpzE81m2q797ordA',
                // Add any other required parameters here
            },
        });
        // Move console.log above the return statement
        console.log("fetchMusicNewReleasest", response.data);

        return response.data;
    } catch (error) {
        throw new Error('Failed to new-releases music');
    }
};

export const useMusicNewReleasestQuery = () => {
    return useQuery({
        queryKey: ['MusicNewReleases'],
        queryFn: fetchMusicNewReleasest,
    });
};
