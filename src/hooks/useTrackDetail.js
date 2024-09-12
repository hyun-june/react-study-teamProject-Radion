import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const fetchDetailTrack=({id})=>{
  return api.get(`/tracks/${id}`);
}

export const useTrackDetailQuery=({id}) => {
  return useQuery({
    queryKey:['track-detail', {id}],
    queryFn: () => fetchDetailTrack({id}),
    select:(result)=>result.data
  })
}