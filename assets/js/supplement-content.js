// Function to handle dropdown changes
function handleDropdownChange(dropdown) {
    const section = dropdown.closest('.dropdown-section'); // Find the nearest parent section
    const contents = section.querySelectorAll('.supplement-content'); // Find all supplement-content divs in this section

    // Hide all content divs in this section
    for (let content of contents) {
        content.style.display = 'none';
    }

    // Show the selected content
    const selectedContentId = dropdown.value;
    const selectedContent = section.querySelector('#' + selectedContentId);
    selectedContent.style.display = 'block';
}

// Function to initialise a dropdown
function initializeDropdown(dropdown) {
    // Set default option (first option) as selected
    dropdown.selectedIndex = 0;

    // Handle the dropdown change event
    dropdown.addEventListener('change', function () {
        handleDropdownChange(dropdown);
    });

    // Show the default content
    handleDropdownChange(dropdown);
}

