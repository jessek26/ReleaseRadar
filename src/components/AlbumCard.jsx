import PropTypes from 'prop-types';
import Button from './Button';
import { useSavedDrops } from '../contexts/SavedDropsContext';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../contexts/AuthContext'; 

function AlbumCard({ album }) {
    const { addToDropList, removeFromDropList, isInDropList } = useSavedDrops();
    const isSaved = isInDropList(album.id);
    

    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleSavedListClick = () => {
        //If they aren't logged in, kick them to the login screen!
        if (!isAuthenticated) {
            navigate('/login');
            return; 
        }

        if (isSaved) {
            removeFromDropList(album.id);
        } else {
            addToDropList(album);
        }
    };
    
    return (
        <div className="album-card">
            <div className="album-img">
                <Link to={`/album/${album.id}`}>
                    <img src={album.images[0].url} alt={album.name} />
                </Link>
            </div>
            <div className="album-info">
                <h3 className="album-title">{album.name}</h3>
                <h4 className="album-artist">{album.artists[0].name}</h4>
                <div className="album-details">
                    <span className="release-date">{album.release_date}</span>
                </div>
            </div>
            <Button onClick={handleSavedListClick} className={isSaved ? 'saved' : ''}>
                {isSaved ? "Remove Album" : "Save Album"}
            </Button>
        </div>
    );
}

AlbumCard.propTypes = {
    album: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired
        })).isRequired,
        artists: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};

export default AlbumCard;