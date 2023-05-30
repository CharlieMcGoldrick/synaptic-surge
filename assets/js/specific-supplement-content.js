document.addEventListener('DOMContentLoaded', function () {
    const supplementDropdown = document.getElementById('supplement-type-dropdown');
    const supplementContentSections = Array.from(document.getElementsByClassName('supplement-content'));

    // Function to display content based on supplement choice
    function showContent(supplement) {
        supplementContentSections.forEach(supplementContentSection => {
            if (supplementContentSection.id === supplement) {
                supplementContentSection.style.display = 'block';
            } else {
                supplementContentSection.style.display = 'none';
            }
        });
    }

    supplementDropdown.addEventListener('change', function () {
        showContent(supplementDropdown.value);
    });

    // Display content based on initial selection
    showContent(supplementDropdown.value);
});