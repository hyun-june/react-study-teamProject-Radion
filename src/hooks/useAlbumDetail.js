import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const fetchDetailAlbum=({id})=>{
  return api.get(`/albums/${id}`);
}

export const useAlbumDetailQuery=({id}) => {
  return useQuery({
    queryKey:['album-detail', {id}],
    queryFn: () => fetchDetailAlbum({id}),
    select:(result)=>result.data
  })
}