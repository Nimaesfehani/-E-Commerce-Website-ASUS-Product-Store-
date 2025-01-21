const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

const validUsername = "admin";
const validPassword = "1234";

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        alert("Wellcome");
        errorMessage.textContent = ""; 
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Password or Username is not valied ";
    }
});
// Store user status (checks if user is signed up)
let isUserSignedUp = false;

// Handle Sign Up Form
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            isUserSignedUp = true;
            alert("Sign-up successful! You can now like, dislike, and comment.");
            localStorage.setItem("isUserSignedUp", "true");
            window.location.href = "index.html";
        });
    }
});

// Check if user is signed up
document.addEventListener("DOMContentLoaded", function () {
    isUserSignedUp = localStorage.getItem("isUserSignedUp") === "true";
});

// Restrict Buying
function buyProduct() {
    if (!isUserSignedUp) {
        alert("You need to sign up before buying a product.");
        window.location.href = "signup.html";
    } else {
        alert("Purchase successful!");
    }
}

// Restrict Liking & Disliking
let likeCount = 0;
let dislikeCount = 0;

function likeProduct() {
    if (!isUserSignedUp) {
        alert("You must sign up to like this product.");
        window.location.href = "signup.html";
        return;
    }
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
}

function dislikeProduct() {
    if (!isUserSignedUp) {
        alert("You must sign up to dislike this product.");
        window.location.href = "signup.html";
        return;
    }
    dislikeCount++;
    document.getElementById('dislikeCount').innerText = dislikeCount;
}

// Restrict Commenting
function addComment() {
    if (!isUserSignedUp) {
        alert("You must sign up to comment.");
        window.location.href = "signup.html";
        return;
    }

    let commentText = document.getElementById('commentBox').value;
    if (commentText.trim() !== "") {
        let commentSection = document.getElementById('commentsSection');
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('alert', 'alert-secondary', 'mt-2');
        commentDiv.innerText = commentText;
        commentSection.appendChild(commentDiv);
        document.getElementById('commentBox').value = "";
    }
}
