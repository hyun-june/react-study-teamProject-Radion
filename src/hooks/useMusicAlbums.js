import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchMusicAlbums = async () => {
    try {
        const response = await api.get('/recommendations', {
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
        // console.log("ddd", response.data); // Move this line above the return statement
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch popular music');
    }
};

export const useMusicAlbumsQuery = () => {
    return useQuery({
        queryKey: ['Music-popular'],
        queryFn: fetchMusicAlbums,
    });
};
