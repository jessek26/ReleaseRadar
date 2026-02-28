import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useSavedDrops } from '../contexts/SavedDropsContext';

const AlbumCard = ({ album }) => {
    const { addToDropList, removeFromDropList, isInDropList } = useSavedDrops();
    const [isSaved, setIsSaved] = useState(false);
    const inDropList = isInDropList(album.id);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('saved'))
        || [];
        const isDropSaved = saved.some(save => save.id === album.id);
        setIsSaved(isDropSaved);
    }, [album.id]);
    
    const handleSavedListClick = () => {
        const saved = JSON.parse(localStorage.getItem('saved')) || [];
        
        if (inDropList) {
            removeFromDropList(album.id);
            const updatedSaved = saved.filter(save => save.id !== album.id);
            localStorage.setItem('saved', JSON.stringify(updatedSaved));
            setIsSaved(false);
        } else {
            addToDropList(album);
            saved.push(album);
            localStorage.setItem('saved', JSON.stringify(saved));
            setIsSaved(true);
        };
    };
    
    return (
        <div className="album-card">
            <div className="album-img">
                <img src={album.images[0].url} alt={album.name} />
            </div>
            <div className="album-info">
                <h3 className="album-title">{album.name}</h3>
                <h4 className="album-artist">{album.artists[0].name}</h4>
                <div className="album-details">
                    <span className="release-date">{album.release_date}</span>
                </div>
            </div>
            <Button onClick={handleSavedListClick}>
                {inDropList ? "Remove Album" : "Save Album"}
            </Button>
        </div>
    );
};

export default AlbumCard;