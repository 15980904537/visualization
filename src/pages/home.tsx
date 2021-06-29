import React from 'react'
import './home.scss'
import imgageHeader from '../images/header.png'

export const Home = () => {
  return (
    <div>
      <header style={{ backgroundImage: `url(${imgageHeader})` }}></header>
    </div>
  )
}
