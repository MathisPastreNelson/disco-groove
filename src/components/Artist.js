import React, { useState, useEffect } from "react";
import axios from "axios";

const Artist = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const options = {
      method: "GET",
      // L'ID actuel est freezeCorléon
      url: "https://deezerdevs-deezer.p.rapidapi.com/artist/13755123",
      headers: {
        "X-RapidAPI-Key": "8f6b00cfaemsh8ac98c8ab00f731p145ce8jsn6cb0a4569a15",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    const response = await axios(options);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data);

  return (
    <div className="mainContainer">
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.nb_fan} Followers</p>
          <img src={data.picture_medium} alt={data.name} />
        </div>
      )}
    </div>
  );
};

export default Artist;
