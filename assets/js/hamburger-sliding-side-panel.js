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
