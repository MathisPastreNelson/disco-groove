import React from "react";
import { data } from "../assets/data"; // importer une liste de projets

const Artist = () => {
  console.log({ data });
  return (
    <div className="mainContainer">
      {data.map((item) => (
        <div className="albumBox" key={item.id}>
          <img
            className="albumImage"
            src={item.album && item.album.cover_medium}
            alt={item.title_short}
          />
          <h3 className="albumTitle">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Artist;
