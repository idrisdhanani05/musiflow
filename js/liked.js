const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        const song = button.closest(".liked-song");

        if (song) {
            song.remove();
        }

        updateSongNumbers();

    });

});


function updateSongNumbers() {

    const songs = document.querySelectorAll(".liked-song");

    songs.forEach((song, index) => {

        const number = song.querySelector(".song-number");

        if (number) {
            number.textContent = index + 1;
        }

    });

}

/* ================= LIKE STORAGE ================= */

function getLikedSongs() {
    return JSON.parse(localStorage.getItem("musicflowLikedSongs")) || [];
}


function saveLikedSongs(likedSongs) {
    localStorage.setItem(
        "musicflowLikedSongs",
        JSON.stringify(likedSongs)
    );
}


function isSongLiked(songName, artistName) {

    const likedSongs = getLikedSongs();

    return likedSongs.some(song =>
        song.name === songName &&
        song.artist === artistName
    );
}


function toggleLike(songName, artistName, button) {

    let likedSongs = getLikedSongs();

    const existingIndex = likedSongs.findIndex(song =>
        song.name === songName &&
        song.artist === artistName
    );


    if (existingIndex !== -1) {

        likedSongs.splice(existingIndex, 1);

        button.innerHTML = "♡";
        button.classList.remove("liked");

    } else {

        likedSongs.push({
            name: songName,
            artist: artistName
        });

        button.innerHTML = "♥";
        button.classList.add("liked");

    }

    saveLikedSongs(likedSongs);
}