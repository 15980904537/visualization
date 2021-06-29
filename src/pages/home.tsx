import React from "react";
import "./home.scss";
import imgageHeader from "../images/header.png";
import { Chart1 } from "../components/charts1";
import { Chart2 } from "../components/charts2";
import { Chart3 } from "../components/charts3";
import { Chart4 } from "../components/charts4";
import { Chart5 } from "../components/charts5";

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${imgageHeader})` }}></header>
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2">
          <Chart3 />
          <Chart4 />
        </section>
        <section className="border section3">3</section>
        <section className="border section4">4</section>
        <section className="border section5">
          <Chart5 />
        </section>
      </main>
      <footer>&copy; 饥人谷 2020-{year}</footer>
    </div>
  );
};
