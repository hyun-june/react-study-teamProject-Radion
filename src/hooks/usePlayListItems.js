import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchPlayListItems = () =>{
    return api.get(`/playlists/37i9dQZF1DXe5W6diBL5N4/tracks`)
}

export const usePlayListItems = () =>{
    return useQuery({
        queryKey:['playlistItem'],
        queryFn:()=>fetchPlayListItems(),
        select:(result)=>result.data.items
    })
}