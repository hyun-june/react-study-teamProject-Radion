import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const fetchArtistList=({ids})=>{
  return api.get(`/artists?ids=${ids}`);
}

export const useArtistListQuery=({ids}) => {
  return useQuery({
    queryKey:['artist-list', {ids}],
    queryFn: () => fetchArtistList({ids}),
    select:(result)=>result.data.artists,
  })
}

