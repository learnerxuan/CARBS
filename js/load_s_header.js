document.addEventListener('DOMContentLoaded', function() {
    fetch('s_header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Add event listener for the logout button
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function(event) {
                    event.preventDefault();
                    // Clear session storage and redirect to login page
                    sessionStorage.clear();
                    window.location.href = 'login.html';
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));
});