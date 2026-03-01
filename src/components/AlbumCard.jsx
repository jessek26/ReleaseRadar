import React from 'react';
import Button from './Button';
import { useSavedDrops } from '../contexts/SavedDropsContext';
import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => {
    const { addToDropList, removeFromDropList, isInDropList } = useSavedDrops();
    const isSaved = isInDropList(album.id);

    const handleSavedListClick = () => {
        if (isSaved) {
            removeFromDropList(album.id);
        } else {
            addToDropList(album);
        }
    };
    
    return (
        <div className="album-card">
            <div className="album-img">
                <Link to={`/album/${album.id}`} state={{album: album}}>
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
            <Button onClick={handleSavedListClick}>
                {isSaved ? "Remove Album" : "Save Album"}
            </Button>
        </div>
    );
};

export default AlbumCard;