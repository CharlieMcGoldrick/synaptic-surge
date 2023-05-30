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
