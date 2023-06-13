const hamburgerIcon = document.getElementById('hamburger');
const sidePanel = document.getElementById('mobile-nav');

// Function to change visbility to visible if sidepanel is hidden, else set visible to hidden
hamburgerIcon.addEventListener('click', function () {
    hamburgerIcon.classList.toggle('change');

    if (sidePanel.style.visibility === "hidden" || !sidePanel.style.visibility) {
        sidePanel.style.visibility = "visible";
        sidePanel.style.opacity = "1";
    } else {
        sidePanel.style.visibility = "hidden";
        sidePanel.style.opacity = "0";
    }
});

// Select all links inside the mobile menu
const mobileMenuLinks = document.querySelectorAll('#mobile-nav a');

// Add a click event listener to each link
for (let i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', function () {
        // Hide the mobile menu and toggle the hamburger icon
        sidePanel.style.visibility = "hidden";
        sidePanel.style.opacity = "0";
        hamburgerIcon.classList.toggle('change');
    });
}