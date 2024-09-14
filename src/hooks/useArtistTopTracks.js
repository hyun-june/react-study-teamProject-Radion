import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const fetchArtistTopTracks=({id})=>{
  return api.get(`artists/${id}/top-tracks`);
}

export const useArtistTopTracksQuery=({id}) => {
  return useQuery({
    queryKey:['artist-top-tracks', {id}],
    queryFn: () => fetchArtistTopTracks({id}),
    select:(result)=>result.data
  })
}