import AlbumCard from "../components/AlbumCard";
import { useSavedDrops } from "../contexts/SavedDropsContext";

function SavedDrops() {
    const { dropList } = useSavedDrops();

    return(
        <main className="main-content">
            <div className="content-header">
                <h2>Saved Drops</h2>
                <p>Albums you can't wait to hear!</p>
            </div>
            {dropList.length > 0 ? (
                <div className="row-list">
                    {dropList.map(album => (
                        <div className="row" key={album.id}>
                            <AlbumCard album={album}/>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <p>You haven't saved any drops yet.</p>
                </div>
            )}
        </main>
    );
};

export default SavedDrops;