import React from "react";
import { NavLink } from "react-router-dom";
import { useCollapse } from "react-collapsed";

const HomeChoose = () => {
  const {
    getCollapseProps: getCollapseProps1,
    getToggleProps: getToggleProps1,
    isExpanded: isExpanded1,
  } = useCollapse();
  const {
    getCollapseProps: getCollapseProps2,
    getToggleProps: getToggleProps2,
    isExpanded: isExpanded2,
  } = useCollapse();

  return (
    <div>
      <nav className="buttonBox">
        {/* COLLAPSE 1 */}
        <section className="selectArtist classicBg" {...getCollapseProps1()}>
          <div className="buttonMaxSize">
            <NavLink className="navLink_ArtistLinks" to="./artist6">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/cb4efb957e6042d018bb6f44c4402fb3/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist classicFont">Charle Aznavour</h2>
            </NavLink>

            <NavLink className="navLink_ArtistLinks" to="./artist7">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/c1d1e7f0defadb4566e59e8f19fcd45e/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist classicFont">Georges Brassens</h2>
            </NavLink>

            <NavLink className="navLink_ArtistLinks" to="./artist8">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/3369b8c95a537fc09dbff822ff1bfd0e/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist classicFont">Jacques Brel</h2>
            </NavLink>

            <NavLink className="navLink_ArtistLinks" to="./artist9">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/7fb8883264e8b6f598a55e3d88aacc04/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist classicFont">Renaud</h2>
            </NavLink>

            <NavLink className="navLink_ArtistLinks" to="./artist10">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/40e6ae825b053b13a20c60f13f2109d4/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist classicFont">Serge Gainsbourg</h2>
            </NavLink>

            <NavLink className="navLink_ArtistLinks" to="./artist11">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/319fd1a5c8f400ea5f928b89605e6c1b/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist classicFont">Les Rita Mitsouko</h2>
            </NavLink>
          </div>
        </section>
        <button
          className="buttonCollapse classicBg classicFont"
          {...getToggleProps1()}>
          <p className="textButtons">
            {isExpanded1 ? "Fermer" : "Nous rayonnâmes"}
          </p>
        </button>

        {/* COLLAPSE 2 */}
        <button className="buttonCollapse rapBg rapFont" {...getToggleProps2()}>
          <p className="textButtons">
            {isExpanded2 ? "Fermer" : "Nous rayonnons"}
          </p>
        </button>
        <section className="selectArtist rapBg" {...getCollapseProps2()}>
          <div className="buttonMaxSize">
            <NavLink className="navLink_ArtistLinks" to="./artist">
              <img
                className="imgArtist "
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/f7e7389bb592119098e8ce469c67a15e/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist rapFont">Freeze Corléone</h2>
            </NavLink>

            <NavLink className="navLink_ArtistLinks" to="./artist1">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/3c6387a6c492920b9fce3a2b0843aafb/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist rapFont">Kaaris</h2>
            </NavLink>

            <NavLink className="navLink_ArtistLinks" to="./artist2">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/7f29f1cac939a6db9273251788da9c41/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist rapFont">Kalash Kriminel</h2>
            </NavLink>

            <NavLink className="navLink_ArtistLinks" to="./artist3">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/9277fdce45b79945918c24f69cb6e8e3/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist rapFont">PNL</h2>
            </NavLink>

            <NavLink className="navLink_ArtistLinks" to="./artist4">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/a7f2260b1a8d1a8ff6906f3af4def14c/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist rapFont">Hugo TSR</h2>
            </NavLink>

            <NavLink className="navLink_ArtistLinks" to="./artist5">
              <img
                className="imgArtist"
                alt=""
                src="https://e-cdns-images.dzcdn.net/images/artist/269b9b348544b54ddeb34e7d36e770d4/500x500-000000-80-0-0.jpg"
              />
              <h2 className="txtArtist rapFont">Sadek</h2>
            </NavLink>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default HomeChoose;
