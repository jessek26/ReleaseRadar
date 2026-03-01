import AlbumCard from '../components/AlbumCard';
import { useLocation } from "react-router-dom";

function AlbumDetailsPage({ albums }) {
   const location = useLocation();
   const album = location.state?.album;

   if(!album) {
    return (
        <main className="main-content">
            <h2>album not found</h2>
            <p>the album your're looking for doesn't exist</p>
        </main>
    );
   };

   return(
    <main className="main-content">
        <AlbumCard album={album}></AlbumCard>
    </main>
   );
};

export default AlbumDetailsPage