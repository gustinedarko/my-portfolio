// Declare variable to store navbar element
const navElement = document.getElementById('navbar');
const navTextElements = document.querySelectorAll('.nav-text');
// detect scroll event on the document
document.addEventListener('scroll', function () {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change navbar bg to white and text to black
        navElement.style.backgroundColor = 'white';
        // Change text color to black
        navTextElements.forEach(function (el) {
            el.style.color = 'black';
    });
 } else {
        // change navbar bg to transparent
        navElement.style.backgroundColor = 'transparent';

         // Revert text color to white (or your preferred default)
        navTextElements.forEach(function (el) {
            el.style.color = 'white';
        });
    }
});