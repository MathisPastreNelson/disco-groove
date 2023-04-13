import React from "react";

import Header from "../components/Header";
import Artist from "../components/Artist";
import AlbumsList from "../components/AlbumsList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Artist />
      <AlbumsList />
      <Footer />
    </div>
  );
};

export default Home;
