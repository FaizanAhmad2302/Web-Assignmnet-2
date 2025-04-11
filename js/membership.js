$(document).ready(function() {
    $("#membership-signup").submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        
        let fullName = $("#full-name").val().trim();
        let email = $("#email").val().trim();
        
        if (fullName === "" || email === "") {
            alert("Please fill in all fields.");
            return;
        }
        
        // Simple email validation
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        // Simulating an AJAX request to "register" the user
        $.ajax({
            url: "data/membership.json", // Dummy file (no actual server processing)
            type: "POST",
            data: JSON.stringify({ fullName: fullName, email: email }),
            contentType: "application/json",
            success: function(response) {
                $("#confirmation-message").text("Thank you, " + fullName + "! You are now a member.")
                    .fadeIn(500)
                    .delay(3000)
                    .fadeOut(500);
                
                // Clear form fields
                $("#membership-signup")[0].reset();
            },
            error: function() {
                alert("Error processing your request. Please try again.");
            }
        });
    });
});
