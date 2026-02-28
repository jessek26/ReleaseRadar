import AlbumCard from "../components/AlbumCard";
import { useState, useEffect } from 'react';
import { getNewReleases } from "../utils/spotifyAPI";

function Home() {
  const [albums, setAlbums]  = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      const newReleases = await getNewReleases()
      setAlbums(newReleases);
      setIsLoading(false);
    };
    fetchAlbums();
  }, []);

  if(isLoading) {
    return(
      <div>Loading new music...</div>
    )
  }

  return (
    <div className="home-page">
      <h2 className="home-welcome">Welcome Back</h2>
      <div className="rowList">
        {albums.map(album => (
          <div className="row" key={album.id}> 
            {/* THE FIX: Just pass the album object, exactly like you did in SavedDrops! */}
            <AlbumCard album={album} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;