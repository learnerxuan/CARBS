document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the login form
    const loginForm = document.getElementById('loginForm');

    // Add an event listener for when the form is submitted
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior (which would reload the page)
            event.preventDefault();

            // Get the values from the username and password fields
            const username = document.getElementById('username').value.trim(); // .trim() removes leading/trailing whitespace
            const password = document.getElementById('password').value.trim();

            // Check if both fields have content
            if (username.length > 0 && password.length > 0) {
                // In a real application, you would send these credentials to a server
                // for authentication. For this simple prototype, we're just checking
                // if they are not empty.

                // Simulate successful login by directly redirecting to the main page
                // The alert() has been removed as per your request.
                window.location.href = 'main.html'; // Navigate to the main page
            } else {
                // If either field is empty, still show an alert
                alert('Please enter both username and password.');
            }
        });
    }
});