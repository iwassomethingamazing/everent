document.addEventListener('DOMContentLoaded', function() {
    const availableDates = ['2023-11-01', '2023-11-03', '2023-11-05']; // Example available dates
    const availableDatesText = document.getElementById('available-dates');
    
    // Display available dates
    availableDatesText.textContent = availableDates.join(', ');
});

function changeImage(thumbnail) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = thumbnail.src; // Change main image to the clicked thumbnail
}
