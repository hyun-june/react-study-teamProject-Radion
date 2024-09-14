import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchSpotifyMusic = ({keyword})=>{
    return api.get(`/search?q=${keyword}&type=album`)
}

export const useSearchSpotifyMusic = ({keyword})=>{
    return useQuery({
        queryKey:[`spotify-music`,{keyword}],
        queryFn:()=>fetchSearchSpotifyMusic({keyword}),
        select:(result)=>result.data.albums.items
    })
}