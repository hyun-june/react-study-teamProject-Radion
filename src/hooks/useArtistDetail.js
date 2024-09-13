import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const fetchArtistDetail=({id})=>{
  return api.get(`/artists/${id}`);
}

export const useArtistDetailQuery=({id}) => {
  return useQuery({
    queryKey:['artist-detail', {id}],
    queryFn: () => fetchArtistDetail({id}),
    select:(result)=>result.data,
  })
}

