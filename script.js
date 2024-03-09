document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-times');
    const navLinks = document.querySelector('.nav-links');

    // Function to open the menu
    function openMenu() {
        navLinks.style.right = '0';
    }

    // Function to close the menu
    function closeMenu() {
        navLinks.style.right = '-200px'; // Adjust as needed
    }

    // Toggle menu when menu icon is clicked
    menuIcon.addEventListener('click', function() {
        openMenu();
    });

    // Close menu when close icon is clicked
    closeIcon.addEventListener('click', function() {
        closeMenu();
    });

    // Close menu when anywhere else on the screen is clicked
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-links') && !event.target.closest('.fa-bars')) {
            closeMenu();
        }
    });
});
