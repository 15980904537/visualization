import React from 'react'
import './home.scss'
import imgageHeader from '../images/header.png'

export const Home = () => {
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${imgageHeader})` }}></header>
      <main>
        <section className="section1">1</section>
        <section className="section2">2</section>
        <section className="section3">3</section>
        <section className="section4">4</section>
        <section className="section5">5</section>
      </main>
    </div>
  )
}
