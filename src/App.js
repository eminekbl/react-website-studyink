import "./style.css";
import React from "react";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Exploring from "./components/Exploring.js";
import Advantages from "./components/Advantages.js";
import Counts from "./components/Counts.js";
import Cards from "./components/Cards.js";
import HassleFree from "./components/HassleFree.js";
import Carousel from "./components/Carousel.js";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Exploring />
      <Counts />
      <Advantages />
      <Cards />
      <HassleFree />
      <Carousel />
      <Footer />
    </div>
  );
}
