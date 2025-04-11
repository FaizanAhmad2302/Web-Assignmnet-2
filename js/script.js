document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("auth-form");
    let isSignupMode = false;

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();

            if (email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!email.includes("@")) {
                alert("Enter a valid email.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }

            if (isSignupMode) {
                let name = document.getElementById("name").value.trim();
                let mobile = document.getElementById("mobile").value.trim();

                if (name === "" || mobile === "") {
                    alert("Please fill in all fields.");
                    return;
                }

                if (mobile.length < 11 || isNaN(mobile)) {
                    alert("Enter a valid mobile number.");
                    return;
                }

                alert("Signup Successful! Please login now.");
                toggleForm(false);
            } else {
                alert("Login Successful! Redirecting to Home Page...");
                window.location.href = "index.html";
            }
        });
    }


    function toggleForm(isSignup) {
        isSignupMode = isSignup;
        document.getElementById("auth-title").innerText = isSignup ? "Sign Up" : "Login";
        document.querySelector(".btn-auth").innerText = isSignup ? "Sign Up" : "Login";
        document.getElementById("toggle-text").innerHTML = isSignup ?
            'Already have an account? <a href="#" id="toggle-auth">Login</a>' :
            'Don\'t have an account? <a href="#" id="toggle-auth">Sign Up</a>';
        document.getElementById("name-field").style.display = isSignup ? "block" : "none";
        document.getElementById("mobile-field").style.display = isSignup ? "block" : "none";
        document.getElementById("toggle-auth").addEventListener("click", function (event) {
            event.preventDefault();
            toggleForm(!isSignupMode);
        });
    }

    document.getElementById("toggle-auth").addEventListener("click", function (event) {
        event.preventDefault();
        toggleForm(!isSignupMode);
    });
});





document.addEventListener("DOMContentLoaded", function () {
    let feedbackForm = document.getElementById("feedback-form");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("feedback-name").value.trim();
            let email = document.getElementById("feedback-email").value.trim();
            let message = document.getElementById("feedback-message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!email.includes("@")) {
                alert("Enter a valid email.");
                return;
            }

            alert("Feedback Submitted Successfully!");
            feedbackForm.reset();
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const searchBtn = document.getElementById("search-btn");
    const suggestionsBox = document.getElementById("search-suggestions");

    // Book Data with IDs Matching the Book Cards in index.html
    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", id: "gatsby" },
        { title: "A Brief History of Time", author: "Stephen Hawking", id: "history-time" },
        { title: "Sapiens: A Brief History", author: "Yuval Noah Harari", id: "sapiens" }
    ];

    //  Show Suggestions when Typing in Search Bar
    searchBar.addEventListener("input", function () {
        let query = searchBar.value.toLowerCase();
        suggestionsBox.innerHTML = ""; 

        if (query.length === 0) {
            suggestionsBox.style.display = "none"; 
            return;
        }

        let filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));

        if (filteredBooks.length === 0) {
            suggestionsBox.style.display = "none";
        } else {
            filteredBooks.forEach(book => {
                let suggestionItem = document.createElement("div");
                suggestionItem.textContent = book.title;
                suggestionItem.addEventListener("click", function () {
                    searchBar.value = book.title;
                    suggestionsBox.style.display = "none";
                    document.getElementById(book.id).scrollIntoView({ behavior: "smooth" }); 
                });
                suggestionsBox.appendChild(suggestionItem);
            });
            suggestionsBox.style.display = "block"; 
        }
    });

    
    searchBtn.addEventListener("click", function () {
        let query = searchBar.value.toLowerCase();
        let book = books.find(book => book.title.toLowerCase() === query);
        
        if (book) {
            document.getElementById(book.id).scrollIntoView({ behavior: "smooth" });
        } else {
            alert("Book not found! Try a different title.");
        }
    });

    
    document.addEventListener("click", function (event) {
        if (!searchBar.contains(event.target) && !suggestionsBox.contains(event.target)) {
            suggestionsBox.style.display = "none";
        }
    });




   
    document.querySelector(".cta-btn").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("book-catalog").scrollIntoView({ behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let chatBox = document.getElementById("chatBox");
    let chatToggleBtn = document.getElementById("chatToggleBtn");
    let closeChatBtn = document.getElementById("closeChatBtn");
    let sendBtn = document.getElementById("sendMessageBtn");
    let chatInput = document.getElementById("chatInput");
    let chatMessages = document.getElementById("chatMessages");

    
    chatToggleBtn.addEventListener("click", function () {
        chatBox.style.display = "block";
    });

    
    closeChatBtn.addEventListener("click", function () {
        chatBox.style.display = "none";
    });

    
    function sendMessage() {
        if (chatInput.value.trim() !== "") {
            let messageDiv = document.createElement("div");
            messageDiv.classList.add("chat-message", "sent-message");
            messageDiv.innerText = chatInput.value;

            chatMessages.appendChild(messageDiv);

            chatMessages.scrollTop = chatMessages.scrollHeight;

            chatInput.value = "";
        }
    }

    
    sendBtn.addEventListener("click", sendMessage);

    
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const announcementModal = new bootstrap.Modal(document.getElementById("announcementModal"));
    announcementModal.show();
});

// Enable Bootstrap Tooltips
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

function hideAnnouncement() {
    document.getElementById("announcement").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("announcementBtn");
    if (btn) {
        btn.addEventListener("click", hideAnnouncement);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});