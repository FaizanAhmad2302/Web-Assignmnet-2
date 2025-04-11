$(document).ready(function() {
    // Load e-books from JSON
    $.ajax({
        url: "data/ebooks.json",
        type: "GET",
        dataType: "json",
        success: function(data) {
            displayEbooks(data);
        },
        error: function() {
            $("#ebook-results").html("<li>Error loading e-books. Please try again later.</li>");
        }
    });
});

// Function to display E-books
function displayEbooks(ebooks) {
    let ebookList = $("#ebook-results");
    ebookList.empty();

    ebooks.forEach(ebook => {
        let listItem = `<li class="ebook-item">
            <h3>${ebook.title}</h3>
            <p>Author: ${ebook.author}</p>
            <a href="${ebook.link}" target="_blank">Read Now</a>
        </li>`;
        ebookList.append($(listItem).hide().fadeIn(500)); // Fade-in effect
    });
}

// Function to filter books dynamically
function filterBooks() {
    let query = $("#search-bar").val().toLowerCase();

    $(".ebook-item").each(function() {
        let title = $(this).find("h3").text().toLowerCase();
        if (title.includes(query)) {
            $(this).fadeIn(300);
        } else {
            $(this).fadeOut(300);
        }
    });
}
