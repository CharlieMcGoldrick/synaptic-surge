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
const supplementTypeDropdown = document.getElementById('supplement-type-dropdown')
const supplementDropdown = document.getElementById('supplementdropdown')
const supplementContentSections = document.getElementById('supplement-content')