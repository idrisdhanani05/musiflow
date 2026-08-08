const playlistTitle = document.getElementById("playlistTitle");
const playlistDescription = document.getElementById("playlistDescription");
const songList = document.getElementById("songList");

const params = new URLSearchParams(window.location.search);
const playlistType = params.get("playlist");


const playlistData = {

    "top-hits": {
        title: "Top Hits",
        description: "The biggest songs right now"
    },

    "chill": {
        title: "Chill Mix",
        description: "Relax and enjoy your favorite songs"
    },

    "daily": {
        title: "Daily Mix",
        description: "A mix made for your everyday listening"
    },

    "arijit": {
        title: "Arijit Mix",
        description: "Popular songs by Arijit Singh"
    },

    "discover": {
        title: "Discover Weekly",
        description: "Fresh music picked for you"
    }

};


const currentPlaylist = playlistData[playlistType] || {
    title: "Musicflow Playlist",
    description: "Your music collection"
};


playlistTitle.textContent = currentPlaylist.title;
playlistDescription.textContent = currentPlaylist.description;


/* ================= GET SONGS ================= */

let playlistSongs = [];


/* Top Hits */

if (playlistType === "top-hits") {

    playlistSongs = songs.filter(song =>
        song.categories.includes("Pop") ||
        song.categories.includes("English")
    );

}


/* Chill Mix */

else if (playlistType === "chill") {

    playlistSongs = songs.filter(song =>
        song.categories.includes("Chill")
    );

}


/* Daily Mix */

else if (playlistType === "daily") {

    playlistSongs = songs.slice(0, 20);

}


/* Arijit Mix */

else if (playlistType === "arijit") {

    playlistSongs = songs.filter(song =>
        song.artist.toLowerCase().includes("arijit")
    );

}


/* Discover Weekly */

else if (playlistType === "discover") {

    playlistSongs = songs.slice(20, 40);

}


/* ================= DISPLAY SONGS ================= */

if (playlistSongs.length === 0) {

    songList.innerHTML = `
        <div class="no-songs">
            <h3>No songs available</h3>
            <p>This playlist doesn't have any songs yet.</p>
        </div>
    `;

} else {

    songList.innerHTML = playlistSongs.map((song, index) => `

        <div class="playlist-song"
     onclick="openPlaylistSong('${song.name.replace(/'/g, "\\'")}', '${song.artist.replace(/'/g, "\\'")}')">

    <div class="playlist-song-number">
        ${index + 1}
    </div>

    <div class="playlist-song-icon">
        🎵
    </div>

    <div class="playlist-song-info">

        <h3>${song.name}</h3>

        <p>${song.artist}</p>

    </div>

</div>

    `).join("");

}

function openPlaylistSong(songName, artistName) {

    songList.innerHTML = `

        <button class="back-btn" onclick="location.reload()">
            ← Back to Songs
        </button>

        <div class="song-player">

            <div class="player-art">
                🎵
            </div>

            <h1>${songName}</h1>

            <p class="player-artist">
                ${artistName}
            </p>

            <div class="progress-container">

                <span>0:00</span>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value="0"
                >

                <span>3:45</span>

            </div>

            <div class="player-controls">

                <button>🔀</button>

                <button>⏮</button>

                <button class="main-play-btn">
                    ▶
                </button>

                <button>⏭</button>

                <button>🔁</button>

            </div>

            <div class="volume-container">

                <span>🔊</span>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value="70"
                >

            </div>

        </div>
    `;
}