import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchArtists = async (id) => {
    const responses = await Promise.all(
        id.map(id => api.get(`/artists/${id}`))
    );
    return responses.map(response => response.data);

}

export const useArtistDataQuery = (id) =>{
    return useQuery({
        queryKey:['artist',id],
        queryFn:()=>fetchArtists(id)
    })
}