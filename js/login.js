const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    window.location.href="home.html";

});
const recentArtistCards = document.querySelectorAll(".recent-card[data-artist]");

recentArtistCards.forEach(card => {

    card.addEventListener("click", () => {

        const artist = card.dataset.artist;

        const results = songs.filter(song =>
            song.artist.toLowerCase().includes(artist.toLowerCase())
        );

        showCategoryResults(artist, results);

    });

});