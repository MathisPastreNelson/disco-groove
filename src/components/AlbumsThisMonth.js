import React, { useEffect, useState } from "react";

const AlbumsThisMonth = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const response = await fetch(
        `theaudiodb.com/api/v1/json/mvid.php?i=112024`
      );
      const data = await response.json();
      setAlbums(data.album);
    };

    getAlbums();
  }, []);
  console.log("test ", albums);

  return (
    <div>
      <h2>Albums sortis ce mois-ci</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.idAlbum}>
            <img src={album.strTrack} alt={album.strAlbum} />
            {album.strAlbum}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsThisMonth;
