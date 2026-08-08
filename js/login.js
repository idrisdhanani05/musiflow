const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    // Save login state
    localStorage.setItem("musicflowLoggedIn", "true");
    localStorage.setItem("musicflowUserEmail", email);

    // Go to Home
    window.location.href = "home.html";

});