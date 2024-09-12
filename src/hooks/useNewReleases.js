import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchNewAlbums = ()=>{
    return api.get('/browse/new-releases')
}

export const useNewReleasesAlbums = () =>{
    return useQuery({
        queryKey:[`newAlbums`],
        queryFn:()=>fetchNewAlbums(),
        select:(result)=>result.data.albums.items
    })
}