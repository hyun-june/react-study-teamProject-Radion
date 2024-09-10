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

const functionName=()=>{
  return api.get(`/albums/4aawyAB9vmqN3uQ7FjRGTy`);
}

export const useAPIExampleQuery=() => {
  return useQuery({
    queryKey:['get-api'],
    queryFn: () =>functionName(),
    select:(result)=>result.data
  })
}