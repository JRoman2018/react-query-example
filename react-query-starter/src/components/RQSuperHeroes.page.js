import React from 'react'
import { Link } from 'react-router-dom'
import useSuperHerosData from '../hooks/useSuperHerosData'


export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data)
  }

  const onError = (error) => {
    console.log('Perform side effect after encountering error', error)
  }

  const {isLoading, data, isError, error, isFetching, refetch } = useSuperHerosData(onSuccess, onError)

  if(isLoading || isFetching){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map(hero => {
        return <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
      })}
      {/* {data?.map(hero => {
        return <div key={hero}>{hero}</div>
      })} */}
    </>
  )
}
