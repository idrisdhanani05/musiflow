const profileAvatar = document.getElementById("profileAvatar");
const profileMenu = document.getElementById("profileMenu");

profileAvatar.addEventListener("click", function (event) {

    event.stopPropagation();

    profileMenu.classList.toggle("show");

});

document.addEventListener("click", function () {

    profileMenu.classList.remove("show");

});
function viewProfile() {
    window.location.href = "profile.html";
}
const notificationBtn = document.getElementById("notificationBtn");
const notificationMenu = document.getElementById("notificationMenu");

if (notificationBtn && notificationMenu) {

    notificationBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        notificationMenu.classList.toggle("show");

    });

    notificationMenu.addEventListener("click", function (event) {

        event.stopPropagation();

    });

    document.addEventListener("click", function () {

        notificationMenu.classList.remove("show");

    });

}
function openQuickAccess(type) {

    if (type === "liked") {
        window.location.href = "liked.html";
    }

    else if (type === "top-hits") {
        window.location.href = "playlist.html?playlist=top-hits";
    }

    else if (type === "chill") {
        window.location.href = "playlist.html?playlist=chill";
    }

    else if (type === "daily") {
        window.location.href = "playlist.html?playlist=daily";
    }

    else if (type === "arijit") {
        window.location.href = "playlist.html?playlist=arijit";
    }

    else if (type === "discover") {
        window.location.href = "playlist.html?playlist=discover";
    }

}
function openHomeSong(songName, artistName) {

    const content = document.querySelector(".main-content");

    content.innerHTML = `

        <div class="home-player-page">

          <button class="home-back-btn" onclick="window.location.href='home.html'">
    ← Back to Home
</button>


            <div class="home-song-player">

                <div class="home-player-art">
                    🎵
                </div>

                <h1>${songName}</h1>

                <p class="home-player-artist">
                    ${artistName}
                </p>


                <div class="home-progress-container">

                    <span>0:00</span>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="0"
                    >

                    <span>3:45</span>

                </div>


                <div class="home-player-controls">

                    <button title="Shuffle">
                        🔀
                    </button>

                    <button title="Previous">
                        ⏮
                    </button>

                    <button class="home-main-play" title="Play">
                        ▶
                    </button>

                    <button title="Next">
                        ⏭
                    </button>

                    <button title="Repeat">
                        🔁
                    </button>

                    <button
        class="player-heart-btn"
        onclick="togglePlayerLike('${songName}', '${artistName}', this)">
        ♡
    </button>

                </div>


                <div class="home-volume-container">

                    <span>🔊</span>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="70"
                    >

                </div>

            </div>

        </div>
    `;
}

function togglePlayerLike(songName, artistName, button) {

    let likedSongs =
        JSON.parse(localStorage.getItem("musicflowLikedSongs")) || [];

    const index = likedSongs.findIndex(song =>
        song.name === songName &&
        song.artist === artistName
    );

    if (index !== -1) {

        likedSongs.splice(index, 1);

        button.innerHTML = "♡";

    } else {

        likedSongs.push({
            name: songName,
            artist: artistName
        });

        button.innerHTML = "♥";

    }

    localStorage.setItem(
        "musicflowLikedSongs",
        JSON.stringify(likedSongs)
    );
}

function logoutUser() {
    window.location.href = "login.html";
}