const ornamentLogo = document.getElementById("ornament-logo");
const ornamentLogo2 = document.getElementById("ornament-logo2");
const ornamentLogo3 = document.getElementById("ornament-logo3");

let currentLetterIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    const ornamentLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }


    shuffleArray(ornamentLetters);

    setInterval(function() {
        ornamentLogo.textContent = ornamentLetters[currentLetterIndex];
    
        currentLetterIndex = (currentLetterIndex + 1) % ornamentLetters.length;

        if (currentLetterIndex === 0) {
            shuffleArray(ornamentLetters);
        }
    }, 150);

    setInterval(function() {
        ornamentLogo3.textContent = ornamentLetters[currentLetterIndex];
    
        currentLetterIndex = (currentLetterIndex + 1) % ornamentLetters.length;

        if (currentLetterIndex === 0) {
            shuffleArray(ornamentLetters);
        }
    }, 151);

    setInterval(function() {
        ornamentLogo2.textContent = ornamentLetters[currentLetterIndex];
    
        currentLetterIndex = (currentLetterIndex + 1) % ornamentLetters.length;

        if (currentLetterIndex === 0) {
            shuffleArray(ornamentLetters);
        }
    }, 1000);
});
