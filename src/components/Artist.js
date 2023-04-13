import React from "react";
import { data } from "../assets/data"; // importer une liste de projets

const Artist = () => {
  console.log({ data });
  return (
    <div className="mainContainer">
      {data.map((item, index) => (
        <div
          className={
            index % 2 === 0
              ? "albumBox albumBox--odd"
              : "albumBox albumBox--even"
          }
          key={item.id}>
          <img
            className="albumImage"
            src={item.album && item.album.cover_medium}
            alt={item.title_short}
          />
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
