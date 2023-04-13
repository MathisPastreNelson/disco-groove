import React from "react";
import { data } from "../assets/data"; // importer une liste de projets
import vynil from "../assets/vynil.png"; // importer le fichier SVG

const Artist = () => {
  console.log({ data });
  return (
    <div className="mainContainer">
      {data.map((item, index) => (
        <div
          // Alternance de classe 1 fois sur 2
          className={
            index % 2 === 0
              ? "albumBox albumBox--odd"
              : "albumBox albumBox--even"
          }
          key={item.id}>
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