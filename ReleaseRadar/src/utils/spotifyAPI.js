//gets temporary token
export async function getSpotifyToken() {
    const clientId=import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
        })
    });

    if (!response.ok) {
        throw new Error(`Token fetch failed: ${reesponse.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
}

//fetch function to get albums
export async function getNewReleases() {
    const token = await getSpotifyToken();

    const response = await fetch('https://api.spotify.com/v1/browse/new-releases?limit=10', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if(!response.ok) {
        throw new Error(`Album fetch failed: ${response.stausText}`);
    }

    const data = await response.json();
    return data.albums.items;
}