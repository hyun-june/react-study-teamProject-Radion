import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const fetchArtistAlbum=(id)=>{
  return api.get(`/artists/${id}/albums`);
}

export const useArtistAlbumQuery=(id) => {
  return useQuery({
    queryKey:['artist-album', id],
    queryFn: () => fetchArtistAlbum(id),
    select:(result)=>result.data,
    enabled: !!id,
  })
}

