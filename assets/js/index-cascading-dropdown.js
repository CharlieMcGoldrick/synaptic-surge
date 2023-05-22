// List of supplements for each type
const supplements = {
    Nootropic: [
        { name: 'Ashwaganda', value: 'nootropic1-content' },
        { name: 'Rhodiola rosea', value: 'nootropic2-content' },
    ],
    Mineral: [
        { name: 'Magnesium', value: 'mineral1-content' },
        { name: 'Potassium', value: 'mineral2-content' },
    ],
    Vitamin: [
        { name: 'Vitamin A', value: 'vitamin1-content' },
        { name: 'Vitamin E', value: 'vitamin2-content' },
    ],
};

// Get references to dropdown elements
document.addEventListener('DOMContentLoaded', function () {

    const supplementTypeDropdown = document.getElementById('supplement-type-dropdown');
    const supplementDropdown = document.getElementById('supplement-dropdown');
    const supplementContentSections = Array.from(document.getElementsByClassName('supplement-content'));

    // Function to generate supplement options
    function generateSupplementOptions() {
        const selectedType = supplementTypeDropdown.value;
        const supplementsForType = supplements[selectedType];

        // Remove all existing options
        while (supplementDropdown.firstChild) {
            supplementDropdown.firstChild.remove();
        }

        // Add a new option
        for (const supplement of supplementsForType) {
            const option = document.createElement('option');
            option.text = supplement.name;
            option.value = supplement.value;
            supplementDropdown.appendChild(option);
        }
    }

    // Function to display content based on supplement choice
    function showContent(supplement) {
        supplementContentSections.forEach(supplementContentSections => {
            if (supplementContentSections.id === supplement) {
                supplementContentSections.style.display = 'block';
            } else {
                supplementContentSections.style.display = 'none';
            }
        });
    }


    // Update Supplement options when a supplement type is selected
    supplementTypeDropdown.addEventListener('change', function () {
        generateSupplementOptions();
        showContent(supplementDropdown.value); // Display content based on initial selection
    });

    supplementDropdown.addEventListener('change', function () {
        showContent(supplementDropdown.value);
    });

    // Initialise Options
    generateSupplementOptions();
    showContent(supplementDropdown.value); // Display content based on initial selection
});
