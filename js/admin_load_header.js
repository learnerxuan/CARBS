// js/load_header.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch the content of the reusable header file
    fetch('admin_header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header. Check file path.');
            }
            return response.text();
        })
        .then(html => {
            // Find the placeholder element on the current page
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                // Inject the header HTML into the placeholder
                headerPlaceholder.innerHTML = html;

                // Determine the current page and set the 'active' class
                const currentPage = window.location.pathname.split('/').pop();
                const navLinks = document.querySelectorAll('.main-nav ul li a');
                
                navLinks.forEach(link => {
                    const linkPage = link.getAttribute('href');
                    if (linkPage === currentPage) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});