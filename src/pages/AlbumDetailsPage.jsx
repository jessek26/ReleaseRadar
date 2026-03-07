import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; 
import { getAlbumById } from '../utils/spotifyAPI';
import { useSavedDrops } from '../contexts/SavedDropsContext';
import { useAuth } from '../contexts/AuthContext'; 

function AlbumDetailsPage() {
    const { id } = useParams();
    const [album, setAlbum] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const { addToDropList, removeFromDropList, isInDropList } = useSavedDrops();
    
    // Grab the auth status and the navigator
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const data = await getAlbumById(id);
                setAlbum(data);
            } catch (err) {
                console.error(err);
                setError("Could not load album details.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchAlbum();
    }, [id]);

    if (isLoading) return <div className="main-content"><h2>Loading fresh drop...</h2></div>;
    if (error) return <div className="main-content"><h2>{error}</h2></div>;
    if (!album) return null;

    const isSaved = isInDropList(album.id);
    
    const handleSavedListClick = () => {
        // Kick unauthenticated users to the login screen!
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        isSaved ? removeFromDropList(album.id) : addToDropList(album);
    };

    return (
        <main className="main-content">
            <div className="details-header">
                <Link to="/" className="back-link">← Back to Releases</Link>
            </div>
            <div className="details-container">
                <img src={album.images[0].url} alt={album.name} className="details-cover-large" />
                <div className="details-info">
                    <h1>{album.name}</h1>
                    <h2>{album.artists[0].name}</h2>
                    <div className="details-meta">
                        <p><strong>Released:</strong> {album.release_date}</p>
                        <p><strong>Tracks:</strong> {album.total_tracks}</p>
                    </div>
                    <div className="details-actions">
                        <button className={`spotify-button ${isSaved ? 'saved' : ''}`} onClick={handleSavedListClick}>
                            {isSaved ? "Remove from Saved Drops" : "Save Drop"}
                        </button>
                        <a href={album.external_urls.spotify} target="_blank" rel="noreferrer" className="spotify-button">
                            Listen on Spotify
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AlbumDetailsPage;