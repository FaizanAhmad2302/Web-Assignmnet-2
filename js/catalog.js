$(document).ready(function() {
    // Load books from JSON when page loads
    fetchBooks();

    // Handle search input event
    $("#search-bar").on("input", function() {
        searchBooks();
    });
});

// Fetch books dynamically from JSON file
function fetchBooks() {
    $.getJSON("data/books.json", function(data) {
        displayBooks(data);
    }).fail(function() {
        console.error("Error fetching book data.");
    });
}

// Display books with fade-in effect
function displayBooks(books) {
    let bookList = $("#book-results");
    bookList.empty();
    
    if (books.length === 0) {
        bookList.append("<li>No books found.</li>");
        return;
    }

    books.forEach(book => {
        let listItem = $(`<li>${book.title} by ${book.author}</li>`);
        listItem.hide().appendTo(bookList).fadeIn(500);
    });
}

// Search books dynamically
function searchBooks() {
    let query = $("#search-bar").val().toLowerCase();

    $.getJSON("data/books.json", function(data) {
        let filteredBooks = data.filter(book => book.title.toLowerCase().includes(query));
        displayBooks(filteredBooks);
    });
}
