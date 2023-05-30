const hamburgerIcon = document.getElementById('hamburger');
const sidePanel = document.getElementById('mobile-nav');

hamburgerIcon.addEventListener('click', function () {
    hamburgerIcon.classList.toggle('change');

    if (sidePanel.style.width === "0px" || !sidePanel.style.width) {
        sidePanel.style.width = "100%";
    } else {
        sidePanel.style.width = "0px";
    }
});