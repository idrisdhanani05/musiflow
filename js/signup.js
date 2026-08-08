const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;


        // Password check
        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        // Minimum password length
        if (password.length < 6) {

            alert("Password must be at least 6 characters.");

            return;
        }


        // Save user information
        localStorage.setItem("musicflowUserName", name);
        localStorage.setItem("musicflowUserEmail", email);
        localStorage.setItem("musicflowUserPassword", password);


        // Login state
        localStorage.setItem("musicflowLoggedIn", "true");


        alert("Account created successfully!");


        // Go to Home
        window.location.href = "home.html";

    });

}