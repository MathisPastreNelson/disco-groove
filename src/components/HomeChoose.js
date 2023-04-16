import React from "react";
import { NavLink } from "react-router-dom";

const HomeChoose = () => {
  return (
    <div>
      <nav className="selectArtist">
        <NavLink className="navLink_ArtistLinks" to="./artist">
          <img
            className="imgArtist"
            alt=""
            src="https://e-cdns-images.dzcdn.net/images/artist/f7e7389bb592119098e8ce469c67a15e/500x500-000000-80-0-0.jpg"
          />
          <h2 className="txtArtist">Freeze Corléone</h2>
        </NavLink>

        <NavLink className="navLink_ArtistLinks" to="./artist1">
          <img
            className="imgArtist"
            alt=""
            src="https://e-cdns-images.dzcdn.net/images/artist/3c6387a6c492920b9fce3a2b0843aafb/500x500-000000-80-0-0.jpg"
          />
          <h2 className="txtArtist">Kaaris</h2>
        </NavLink>

        <NavLink className="navLink_ArtistLinks" to="./artist2">
          <img
            className="imgArtist"
            alt=""
            src="https://e-cdns-images.dzcdn.net/images/artist/7f29f1cac939a6db9273251788da9c41/500x500-000000-80-0-0.jpg"
          />
          <h2 className="txtArtist">Kalash Kriminel</h2>
        </NavLink>

        <NavLink className="navLink_ArtistLinks" to="./artist3">
          <img
            className="imgArtist"
            alt=""
            src="https://e-cdns-images.dzcdn.net/images/artist/9277fdce45b79945918c24f69cb6e8e3/500x500-000000-80-0-0.jpg"
          />
          <h2 className="txtArtist">PNL</h2>
        </NavLink>

        <NavLink className="navLink_ArtistLinks" to="./artist4">
          <img
            className="imgArtist"
            alt=""
            src="https://e-cdns-images.dzcdn.net/images/artist/a7f2260b1a8d1a8ff6906f3af4def14c/500x500-000000-80-0-0.jpg"
          />
          <h2 className="txtArtist">Hugo TSR</h2>
        </NavLink>

        <NavLink className="navLink_ArtistLinks" to="./artist5">
          <img
            className="imgArtist"
            alt=""
            src="https://e-cdns-images.dzcdn.net/images/artist/269b9b348544b54ddeb34e7d36e770d4/500x500-000000-80-0-0.jpg"
          />
          <h2 className="txtArtist">Sadek</h2>
        </NavLink>
      </nav>
    </div>
  );
};

export default HomeChoose;