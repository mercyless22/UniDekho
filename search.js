// search.js
function initSearchFunctionality() {
    // Initialize Select2 for multiple select fields
    $('#study-destination').select2({
        placeholder: "Study destination",
        allowClear: true
    });

    $('#subject').select2({
        placeholder: "Subjects",
        allowClear: true
    });

    // Handle Search Button click
    $('#search-button').click(function() {
        const studyLevel = $('#study-level').val();
        const studyDestinations = $('#study-destination').val(); // Get multiple values
        const subjects = $('#subject').val(); // Get multiple values

        if (studyLevel && studyDestinations.length && subjects.length) {
            alert(`Search for:\nStudy Level: ${studyLevel}\nStudy Destinations: ${studyDestinations.join(', ')}\nSubjects: ${subjects.join(', ')}`);
        } else {
            alert('Please select all fields.');
        }
    });
}

// Expose the function so it can be called from the main page
window.initSearchFunctionality = initSearchFunctionality;
