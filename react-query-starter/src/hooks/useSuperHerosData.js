
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHero = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const useSuperHerosData = (onSuccess, onError) => {
    return useQuery(
      'super-heroes',
      fetchSuperHero,
      {
        onSuccess,
        onError,
        staleTime: 0,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        refetchInterval: false,
        refetchIntervalInBackground: true,
        enabled: true,
        select: (data) => {
          return data
        }
      }
    )
}

export default useSuperHerosData;