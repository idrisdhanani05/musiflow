const searchInput = document.querySelector(".search-box input");
const recentSection = document.querySelector(".search-section");
const browseSection = document.querySelectorAll(".search-section")[1];

// Create category lists automatically

const categories = {
    Hindi: [],
    English: [],
    Bollywood: [],
    Pop: [],
    "Hip-Hop": [],
    Rock: [],
    Chill: [],
    Workout: []
};

songs.forEach(song => {

    song.categories.forEach(category => {

        if (categories[category]) {
            categories[category].push({
                name: song.name,
                artist: song.artist,
                type: category
            });
        }

    });

});

searchInput.addEventListener("input", function () {

    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
        showDefaultContent();
        return;
    }

    const results = songs.filter(song =>
        song.name.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query)
    );

    showResults(results);
});
function showResults(results) {

    recentSection.innerHTML = `

        <button class="back-browse-btn" onclick="showBrowse()">
            ← Back to Browse
        </button>

        <h1>Search Results</h1>

        <div class="search-results">

            ${
                results.length > 0
                ? results.map(song => `
                    
                    <div class="result-card" onclick="openSong('${song.name}', '${song.artist}')">

                        <div class="result-image">
                            🎵
                        </div>

                        <div class="result-info">

                            <h3>${song.name}</h3>

                            <p>Song • ${song.artist}</p>

                        </div>

                    </div>

                `).join("")
                : `
                    <div class="no-results">
                        <h2>No results found</h2>
                        <p>Try searching for another song or artist.</p>
                    </div>
                `
            }

        </div>
    `;

    browseSection.style.display = "none";
}

function showCategoryResults(category, results) {

    recentSection.innerHTML = `

        <button class="back-browse-btn" onclick="showBrowse()">
            ← Back to Browse
        </button>

        <h1>${category} Songs</h1>

        <div class="search-results">

            ${
                results.length > 0
                ? results.map(song => `
                    
                    <div class="result-card" onclick="openSong('${song.name}', '${song.artist}')">

                        <div class="result-image">
                            🎵
                        </div>

                        <div class="result-info">

                            <h3>${song.name}</h3>

                            <p>${song.type} • ${song.artist}</p>

                        </div>

                    </div>

                `).join("")
                : `
                    <div class="no-results">
                        <h2>No songs found</h2>
                        <p>There are no songs in this category yet.</p>
                    </div>
                `
            }

        </div>
    `;

    browseSection.style.display = "none";
}

function showDefaultContent() {

    location.reload();

}

const categoryCards = document.querySelectorAll(".browse-card");

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        const results = categories[category] || [];

        showCategoryResults(category, results);

    });

});

function showBrowse() {
    location.reload();
}

function showArtistSongs(artist) {

    const results = songs.filter(song =>
        song.artist.toLowerCase().includes(artist.toLowerCase())
    );

    showCategoryResults(artist, results);

}
function openSong(songName, artistName) {

    recentSection.innerHTML = `

        <button class="back-browse-btn" onclick="showBrowse()">
            ← Back to Browse
        </button>

        <div class="song-player">

            <div class="player-art">
                🎵
            </div>

            <h1>${songName}</h1>

            <p class="player-artist">${artistName}</p>

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

    browseSection.style.display = "none";
}
