import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchPlayListItems = ({id}) =>{
    return api.get(`/playlists/${id}/tracks`)
}

export const usePlayListItems = ({id}) =>{
    return useQuery({
        queryKey:['playlistItem',{id}],
        queryFn:()=>fetchPlayListItems({id}),
        select:(result)=>result.data.items
    })
}