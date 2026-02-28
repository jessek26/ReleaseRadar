import { createContext, useState, useContext } from 'react';

//creating the context
const SavedDropsContext = createContext();

//hook for using context
export function useSavedDrops() {
    const context = useContext(SavedDropsContext);
    if(!context) { 
        throw new Error('useSavedDrops must be within SavedDropsProvider')
    }
    return context;
};

//creating provider component
export function SavedDropsProvider({ children }) {
    const [dropList, setDropList] = useState(() => {
        const saved = localStorage.getItem('saved');
        return saved ? JSON.parse(saved) : [];
    });

    const addToDropList = (album) => {
        if(!dropList.some(a => a.id === album.id)) {
            setDropList(prev => [...prev, album]);
        }
    };

    const removeFromDropList = (albumId) => {
        setDropList(prev => prev.filter(album => album.id !== albumId));
    };

    const isInDropList = (albumId) => { 
        return dropList.some(album => album.id === albumId);
    };

    const value = {
        dropList,
        addToDropList,
        removeFromDropList,
        isInDropList
    };

    return (
        <SavedDropsContext.Provider value={value}>
            {children}
        </SavedDropsContext.Provider>
    );
};