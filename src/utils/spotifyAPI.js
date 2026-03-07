const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export async function getSpotifyToken() {
    const authString = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${authString}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch Spotify token');
    }

    const data = await response.json();
    return data.access_token;
}

export async function getNewReleases() {
    const token = await getSpotifyToken();
  
    const response = await fetch(
      'https://api.spotify.com/v1/browse/new-releases?limit=20&market=US',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  
    const data = await response.json();
  
    console.log("Spotify API data:", data.albums.items);
  
    return data.albums.items;
  }
export async function getAlbumById(albumId) {
    const token = await getSpotifyToken();
    
    const response = await fetch('https://api.spotify.com/v1/albums/' + albumId, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(`Single album fetch failed: ${response.statusText}`);
    }

    return await response.json();
}