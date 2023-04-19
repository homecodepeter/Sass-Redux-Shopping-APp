import React from 'react'
import { Link } from 'react-router-dom'
import { img } from '../../images/image'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
      <div className="logo">
    Shopiing App
      </div>
      </Link>
      <div className="user-image">
     <img src={img} alt="user" />
      </div>
    </div>
  )
}

export default Header