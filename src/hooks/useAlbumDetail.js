import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const getDetailAlbum=({id})=>{
  return api.get(`/albums/${id}`);
}

export const useAlbumDetailQuery=({id}) => {
  return useQuery({
    queryKey:['album-detail', {id}],
    queryFn: () => getDetailAlbum({id}),
    select:(result)=>result.data
  })
}