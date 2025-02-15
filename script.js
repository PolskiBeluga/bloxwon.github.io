document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const profileBtn = document.getElementById("profileBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");

    let balance = 0;
    let loggedInUser = "";

    function openModal(modal) {
        modal.style.display = "block";
    }

    function closeModal(modal) {
        modal.style.display = "none";
    }

    function loginUser() {
        const username = document.getElementById("loginUser").value;
        if (username.trim() === "") {
            alert("Please enter a valid username.");
            return;
        }

        loggedInUser = username;
        document.getElementById("usernameDisplay").innerText = username;
        document.getElementById("profileSection").style.display = "block";

        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";

        closeModal(loginModal);
    }

    function signUpUser() {
        loginUser();
    }

    function depositMoney() {
        balance += 100;
        document.getElementById("balance").innerText = balance;
    }

    function withdrawMoney() {
        if (balance >= 50) {
            balance -= 50;
            document.getElementById("balance").innerText = balance;
        } else {
            alert("Not enough balance!");
        }
    }

    function logoutUser() {
        loggedInUser = "";
        balance = 0;
        document.getElementById("balance").innerText = balance;
        document.getElementById("profileSection").style.display = "none";

        loginBtn.style.display = "inline-block";
        signupBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
    }

    loginBtn.addEventListener("click", () => openModal(loginModal));
    signupBtn.addEventListener("click", () => openModal(signupModal));
    logoutBtn.addEventListener("click", logoutUser);
});
