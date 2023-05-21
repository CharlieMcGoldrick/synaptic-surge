// List of supplements for each type
const supplements = {
    Nootropic: [
        { name: 'Nootropic 1', value: 'nootropic1-content' },
        { name: 'Nootropic 2', value: 'nootropic2-content' },
    ],
    Mineral: [
        { name: 'Mineral 1', value: 'mineral1-content' },
        { name: 'Mineral 2', value: 'mineral2-content' },
    ],
    Vitamin: [
        { name: 'Vitamin 1', value: 'vitamin1-content' },
        { name: 'Vitamin 2', value: 'vitamin2-content' },
    ],
};

// Get references to dropdown elements
document.addEventListener('DOMContentLoaded', function () {

    const supplementTypeDropdown = document.getElementById('supplement-type-dropdown');
    const supplementDropdown = document.getElementById('supplement-dropdown');
    const supplementContentSections = document.getElementById('supplement-content');

    // Function to generate supplement options
    function generateSupplementOptions() {
        const selectedType = supplementTypeDropdown.value;
        const supplementsForType = supplements[selectedType];
        
        // Remove all existing options
        while (supplementDropdown.firstChild) {
            supplementDropdown.firstChild.delete();
        }
    
        // Add a new option
        for (const supplement of supplementsForType) {
            const option = document.createElement('option');
            option.text = supplement.name;
            option.value = supplement.value;
            supplementDropdown.appendChild(option);
        }
    }


    // Update Supplement options when a supplement type is selected
    supplementTypeDropdown.addEventListener('change', function () {
        generateSupplementOptions();
    });

    // Initialise Options
    generateSupplementOptions();
});
