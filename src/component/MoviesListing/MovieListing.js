import React from 'react'
import{useSelector}from"react-redux";
import { getAllProduct } from '../../features/Shops/shoppingSlice';
import './MovieListing.scss'

const MovieListing = () => {
  const movies = useSelector(getAllProduct)
  console.log(movies)
 
  let renderMovie = movies.map(list => (
    <div className="main" key={list.id}>
      <div className="each">
        <div className="image">
        <img  src={list.image} alt="img" />
        </div>
        <div className="down">
        <h4>{list.title}</h4>
         <div className="cate"><span>Type</span>: {list.category}</div>
         <p>${list.price}</p>
         </div>
      </div>
    </div>
  ))

  return (
    <div className="allProduct">{renderMovie}</div>
  )
}

export default MovieListing