import React, { useEffect } from 'react'
import MovieListing from '../MoviesListing/MovieListing'
import MovieApi from '../../common/Api/MovieApi'
import { useDispatch } from 'react-redux'
import {movie} from '../../features/Shops/shoppingSlice'

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    
    const fetchMovies = async () => {
      const response = await MovieApi.get()
      .catch(error => {
        console.log("Err",error)
      })
      dispatch(movie(response.data))
    }


    fetchMovies()
  },[])

  return (
    <div>
    <div className="banner-img"></div>
    <MovieListing />
    </div>
  )
}

export default Home