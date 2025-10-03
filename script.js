// Function to switch between content tabs
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active-content"); // Keep the class management clean
    }

    // Get all elements with class="tab-button" and remove the active class
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-tab");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active-tab");
}

// Function to flip a flashcard
function flipCard(card) {
    // Toggle the 'is-flipped' class to trigger the CSS transition
    card.classList.toggle('is-flipped');
}

// Set the default tab to be open on page load
// This ensures 'Databases' is visible when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Manually trigger the tab opening for the first tab
    document.querySelector('.tab-button').click();
});