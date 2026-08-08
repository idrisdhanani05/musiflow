const searchInput = document.querySelector(".search-box input");
const recentSection = document.querySelector(".search-section");
const browseSection = document.querySelectorAll(".search-section")[1];

const songs = [

    // ================= HINDI / BOLLYWOOD =================

    {
        name: "Kesariya",
        artist: "Arijit Singh",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Chaleya",
        artist: "Arijit Singh",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Agar Tum Saath Ho",
        artist: "Alka Yagnik, Arijit Singh",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Tum Hi Ho",
        artist: "Arijit Singh",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Apna Bana Le",
        artist: "Arijit Singh",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Tujhe Kitna Chahne Lage",
        artist: "Arijit Singh",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Ve Kamleya",
        artist: "Arijit Singh",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "O Maahi",
        artist: "Arijit Singh",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Satranga",
        artist: "Arijit Singh",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Tera Ban Jaunga",
        artist: "Akhil Sachdeva",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Heeriye",
        artist: "Jasleen Royal",
        categories: ["Hindi", "Pop"]
    },
    {
        name: "Maan Meri Jaan",
        artist: "King",
        categories: ["Hindi", "Pop"]
    },
    {
        name: "Husn",
        artist: "Anuv Jain",
        categories: ["Hindi", "Chill"]
    },
    {
        name: "Baarishein",
        artist: "Anuv Jain",
        categories: ["Hindi", "Chill"]
    },
    {
        name: "Gul",
        artist: "Anuv Jain",
        categories: ["Hindi", "Chill"]
    },
    {
        name: "Iraaday",
        artist: "Abdul Hannan",
        categories: ["Hindi", "Chill"]
    },
    {
        name: "Kho Gaye Hum Kahan",
        artist: "Jasleen Royal",
        categories: ["Hindi", "Chill"]
    },
    {
        name: "Ranjha",
        artist: "B Praak",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Raataan Lambiyan",
        artist: "Jubin Nautiyal",
        categories: ["Hindi", "Bollywood"]
    },
    {
        name: "Shayad",
        artist: "Arijit Singh",
        categories: ["Hindi", "Bollywood"]
    },


    // ================= ENGLISH =================

    {
        name: "Shape of You",
        artist: "Ed Sheeran",
        categories: ["English", "Pop"]
    },
    {
        name: "Perfect",
        artist: "Ed Sheeran",
        categories: ["English", "Pop", "Chill"]
    },
    {
        name: "Photograph",
        artist: "Ed Sheeran",
        categories: ["English", "Pop", "Chill"]
    },
    {
        name: "Thinking Out Loud",
        artist: "Ed Sheeran",
        categories: ["English", "Pop", "Chill"]
    },
    {
        name: "Blinding Lights",
        artist: "The Weeknd",
        categories: ["English", "Pop", "Workout"]
    },
    {
        name: "Starboy",
        artist: "The Weeknd",
        categories: ["English", "Pop", "Hip-Hop"]
    },
    {
        name: "Save Your Tears",
        artist: "The Weeknd",
        categories: ["English", "Pop"]
    },
    {
        name: "Die For You",
        artist: "The Weeknd",
        categories: ["English", "Pop", "Chill"]
    },
    {
        name: "Cruel Summer",
        artist: "Taylor Swift",
        categories: ["English", "Pop"]
    },
    {
        name: "Anti-Hero",
        artist: "Taylor Swift",
        categories: ["English", "Pop"]
    },
    {
        name: "Blank Space",
        artist: "Taylor Swift",
        categories: ["English", "Pop"]
    },
    {
        name: "Love Story",
        artist: "Taylor Swift",
        categories: ["English", "Pop", "Chill"]
    },
    {
        name: "As It Was",
        artist: "Harry Styles",
        categories: ["English", "Pop"]
    },
    {
        name: "Watermelon Sugar",
        artist: "Harry Styles",
        categories: ["English", "Pop"]
    },
    {
        name: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        categories: ["English", "Pop"]
    },
    {
        name: "Ghost",
        artist: "Justin Bieber",
        categories: ["English", "Pop"]
    },
    {
        name: "Peaches",
        artist: "Justin Bieber",
        categories: ["English", "Pop"]
    },
    {
        name: "Someone You Loved",
        artist: "Lewis Capaldi",
        categories: ["English", "Chill"]
    },
    {
        name: "Before You Go",
        artist: "Lewis Capaldi",
        categories: ["English", "Chill"]
    },
    {
        name: "Let Me Down Slowly",
        artist: "Alec Benjamin",
        categories: ["English", "Chill"]
    },


    // ================= POP =================

    {
        name: "Levitating",
        artist: "Dua Lipa",
        categories: ["Pop", "English"]
    },
    {
        name: "Don't Start Now",
        artist: "Dua Lipa",
        categories: ["Pop", "English"]
    },
    {
        name: "Houdini",
        artist: "Dua Lipa",
        categories: ["Pop", "English"]
    },
    {
        name: "New Rules",
        artist: "Dua Lipa",
        categories: ["Pop", "English"]
    },
    {
        name: "Uptown Funk",
        artist: "Bruno Mars",
        categories: ["Pop", "English", "Workout"]
    },
    {
        name: "Just The Way You Are",
        artist: "Bruno Mars",
        categories: ["Pop", "English", "Chill"]
    },
    {
        name: "Locked Out of Heaven",
        artist: "Bruno Mars",
        categories: ["Pop", "English"]
    },
    {
        name: "That's What I Like",
        artist: "Bruno Mars",
        categories: ["Pop", "English"]
    },
    {
        name: "Flowers",
        artist: "Miley Cyrus",
        categories: ["Pop", "English"]
    },
    {
        name: "Wrecking Ball",
        artist: "Miley Cyrus",
        categories: ["Pop", "English"]
    },
    {
        name: "Bad Guy",
        artist: "Billie Eilish",
        categories: ["Pop", "English"]
    },
    {
        name: "Lovely",
        artist: "Billie Eilish",
        categories: ["Pop", "English", "Chill"]
    },
    {
        name: "Happier Than Ever",
        artist: "Billie Eilish",
        categories: ["Pop", "English", "Chill"]
    },
    {
        name: "Attention",
        artist: "Charlie Puth",
        categories: ["Pop", "English"]
    },
    {
        name: "We Don't Talk Anymore",
        artist: "Charlie Puth",
        categories: ["Pop", "English", "Chill"]
    },


    // ================= HIP-HOP =================

    {
        name: "God's Plan",
        artist: "Drake",
        categories: ["Hip-Hop", "English"]
    },
    {
        name: "One Dance",
        artist: "Drake",
        categories: ["Hip-Hop", "English", "Pop"]
    },
    {
        name: "Hotline Bling",
        artist: "Drake",
        categories: ["Hip-Hop", "English"]
    },
    {
        name: "SICKO MODE",
        artist: "Travis Scott",
        categories: ["Hip-Hop", "English"]
    },
    {
        name: "Goosebumps",
        artist: "Travis Scott",
        categories: ["Hip-Hop", "English"]
    },
    {
        name: "Highest in the Room",
        artist: "Travis Scott",
        categories: ["Hip-Hop", "English"]
    },
    {
        name: "Lose Yourself",
        artist: "Eminem",
        categories: ["Hip-Hop", "English", "Workout"]
    },
    {
        name: "Mockingbird",
        artist: "Eminem",
        categories: ["Hip-Hop", "English"]
    },
    {
        name: "Without Me",
        artist: "Eminem",
        categories: ["Hip-Hop", "English"]
    },
    {
        name: "The Box",
        artist: "Roddy Ricch",
        categories: ["Hip-Hop", "English"]
    },
    {
        name: "Sunflower",
        artist: "Post Malone",
        categories: ["Hip-Hop", "English", "Pop"]
    },
    {
        name: "Circles",
        artist: "Post Malone",
        categories: ["Hip-Hop", "English", "Pop"]
    },
    {
        name: "Congratulations",
        artist: "Post Malone",
        categories: ["Hip-Hop", "English"]
    },
    {
        name: "HUMBLE.",
        artist: "Kendrick Lamar",
        categories: ["Hip-Hop", "English"]
    },
    {
        name: "Not Like Us",
        artist: "Kendrick Lamar",
        categories: ["Hip-Hop", "English"]
    },


    // ================= ROCK =================

    {
        name: "Believer",
        artist: "Imagine Dragons",
        categories: ["Rock", "English", "Workout"]
    },
    {
        name: "Thunder",
        artist: "Imagine Dragons",
        categories: ["Rock", "English"]
    },
    {
        name: "Demons",
        artist: "Imagine Dragons",
        categories: ["Rock", "English", "Chill"]
    },
    {
        name: "Radioactive",
        artist: "Imagine Dragons",
        categories: ["Rock", "English", "Workout"]
    },
    {
        name: "Enemy",
        artist: "Imagine Dragons",
        categories: ["Rock", "English", "Hip-Hop"]
    },
    {
        name: "Numb",
        artist: "Linkin Park",
        categories: ["Rock", "English"]
    },
    {
        name: "In The End",
        artist: "Linkin Park",
        categories: ["Rock", "English"]
    },
    {
        name: "What I've Done",
        artist: "Linkin Park",
        categories: ["Rock", "English"]
    },
    {
        name: "Boulevard of Broken Dreams",
        artist: "Green Day",
        categories: ["Rock", "English"]
    },
    {
        name: "21 Guns",
        artist: "Green Day",
        categories: ["Rock", "English", "Chill"]
    },


    // ================= CHILL =================

    {
        name: "Until I Found You",
        artist: "Stephen Sanchez",
        categories: ["Chill", "English", "Pop"]
    },
    {
        name: "Here With Me",
        artist: "d4vd",
        categories: ["Chill", "English"]
    },
    {
        name: "Romantic Homicide",
        artist: "d4vd",
        categories: ["Chill", "English"]
    },
    {
        name: "Dandelions",
        artist: "Ruth B.",
        categories: ["Chill", "English", "Pop"]
    },
    {
        name: "Atlantis",
        artist: "Seafret",
        categories: ["Chill", "English"]
    },
    {
        name: "Lovely",
        artist: "Billie Eilish",
        categories: ["Chill", "English", "Pop"]
    },
    {
        name: "The Night We Met",
        artist: "Lord Huron",
        categories: ["Chill", "English"]
    },
    {
        name: "Another Love",
        artist: "Tom Odell",
        categories: ["Chill", "English"]
    },
    {
        name: "Yellow",
        artist: "Coldplay",
        categories: ["Chill", "Rock", "English"]
    },
    {
        name: "Sparks",
        artist: "Coldplay",
        categories: ["Chill", "Rock", "English"]
    },


    // ================= WORKOUT =================

    {
        name: "Titanium",
        artist: "David Guetta",
        categories: ["Workout", "Pop", "English"]
    },
    {
        name: "Turn Down for What",
        artist: "DJ Snake, Lil Jon",
        categories: ["Workout", "Hip-Hop", "English"]
    },
    {
        name: "Animals",
        artist: "Martin Garrix",
        categories: ["Workout", "Pop", "English"]
    },
    {
        name: "Wake Me Up",
        artist: "Avicii",
        categories: ["Workout", "Pop", "English"]
    },
    {
        name: "The Nights",
        artist: "Avicii",
        categories: ["Workout", "Pop", "English"]
    },
    {
        name: "Levels",
        artist: "Avicii",
        categories: ["Workout", "Pop", "English"]
    },
    {
        name: "Don't You Worry Child",
        artist: "Swedish House Mafia",
        categories: ["Workout", "Pop", "English"]
    },
    {
        name: "On Top of the World",
        artist: "Imagine Dragons",
        categories: ["Workout", "Rock", "English"]
    },
    {
        name: "Whatever It Takes",
        artist: "Imagine Dragons",
        categories: ["Workout", "Rock", "English"]
    },
    {
        name: "My Songs Know What You Did in the Dark",
        artist: "Fall Out Boy",
        categories: ["Workout", "Rock", "English"]
    }
];


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