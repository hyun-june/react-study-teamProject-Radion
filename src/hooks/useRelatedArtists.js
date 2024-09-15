import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const fetchRelatedArtists=(id)=>{
  return api.get(`/artists/${id}/related-artists`);
}

export const useRelatedArtistsQuery=(id) => {
  return useQuery({
    queryKey:['artists-related', id],
    queryFn: () => fetchRelatedArtists(id),
    select:(result)=>result.data,
    enabled: !!id,
  })
}

