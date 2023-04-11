import React from "react";

import Header from "../components/Header";
import AlbumsThisMonth from "../components/AlbumsThisMonth";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <AlbumsThisMonth />
      <Footer />
    </div>
  );
};

export default Home;
