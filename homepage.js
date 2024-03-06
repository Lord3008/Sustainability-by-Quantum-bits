document.addEventListener("DOMContentLoaded", function () {
    // Detect when the user scrolls
    window.addEventListener("scroll", function () {
        // Get all card elements
        const cards = document.querySelectorAll(".card");

        // Loop through each card
        cards.forEach(function (card) {
            // Calculate the card's position relative to the viewport
            const cardTop = card.getBoundingClientRect().top;

            // Check if the card is in the viewport
            if (cardTop < window.innerHeight * 0.75) {
                card.classList.add("appear");
            }
        });
    });
});
