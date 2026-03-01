import AlbumCard from "../components/AlbumCard";
import { useState, useEffect } from 'react';
import { getNewReleases } from "../utils/spotifyAPI";

function Home() {
  const [albums, setAlbums]  = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const newReleases = await getNewReleases();
        
        console.log("Total albums from Spotify:", newReleases.length);
        
        setAlbums(newReleases); 
      } catch (err) {
        console.error("Error fetching albums:", err);
        setError("Failed to load music.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAlbums();
  }, []);

  if (error) {
    return (
      <div className="home-page">
        <h2>{error}</h2>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading new music...</div>;
  }

  return (
    <div className="home-page">
      <h2 className="home-welcome">Welcome Back</h2>
      <div className="rowList">
        {albums.map(album => (
          <div className="row" key={album.id}> 
            <AlbumCard album={album} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;