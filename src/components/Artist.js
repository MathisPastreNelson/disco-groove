import React from "react";

import { freezeData } from "../assets/freezeData"; // importer une liste de projets
import vynil from "../assets/vynil.png"; // importer le fichier SVG

const Artist = () => {
  /*Le clique sur albumbox déclanchera le lecteur*/
  const handleAlbumClick = (e) => {
    const audio = e.currentTarget.querySelector(".albumAudioPreview");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  console.log({ freezeData });

  return (
    <div className="mainContainer rapFont">
      {freezeData.map((item, index) => (
        <div
          // Alternance de classe 1 fois sur 2
          className={
            index % 2 === 0
              ? "albumBox albumBox--odd"
              : "albumBox albumBox--even"
          }
          key={item.id}
          onClick={handleAlbumClick}>
          <div className="albumImageWrapper">
            <img
              className="albumImage"
              src={item.album && item.album.cover_medium}
              alt={item.title_short}
            />
            <img
              className={
                index % 2 === 0 ? "discFillImage" : "discFillImageReverse"
              }
              src={vynil}
              alt="Disc fill"
            />
          </div>
          <div className="albumDescribeBox">
            <h3 className="albumTitle">{item.title}</h3>
            <p className="albumDuration">
              Durée :{" "}
              {new Date(item.duration * 1000)
                .toISOString()
                .substr(14, 5)
                .toLocaleString()}
            </p>
            <audio className="albumAudioPreview" controls>
              <source src={item.preview} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artist;
