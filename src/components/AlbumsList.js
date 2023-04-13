import React, { useState, useEffect } from "react";
import axios from "axios";

const AlbumsList = () => {
  const [data, setData] = useState([]);

  // UseEffect
  useEffect(() => {
    const url = `https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/13755123/top`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  });
  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
