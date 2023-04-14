import React from "react";

import Header from "../components/Header";
import ScrollUpButton from "../components/ScrollUpButton";
import ScrollDownButton from "../components/ScrollDownButton";
import Artist from "../components/Artist";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <ScrollUpButton />
      <ScrollDownButton />
      <Artist />
      <Footer />
    </div>
  );
};

export default Home;
