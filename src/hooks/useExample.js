/** TODO. 참고 후 지울 예정 */

/** 사용법
 * const {
    data: 커스텀 재정의,
    isLoading: 커스텀 재정의,
    isError: 커스텀 재정의,
    error: 커스텀 재정의,
  } = useExampleQuery({ page });
 */

import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const functionName=({page})=>{
  return api.get(`/movie/popular?language=ko-KR&page=${page}`);
}

export const useExampleQuery=({page}) => {
  return useQuery({
    queryKey:['식별', {page}],
    queryFn: () =>functionName({page}),
    select:(result)=>result.data
  })
}