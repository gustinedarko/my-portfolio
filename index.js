// Declare variable to store navbar element
const navElement = document.getElementById('navbar');
const navTextElements = document.querySelectorAll('.nav-text');
// detect scroll event on the document
document.addEventListener('scroll', function () {
    // console.log(window.scrollY);
    if (window.scrollY > 150) {
        // change navbar bg to white and text to black
        navElement.classList.add('bg-white');
        navElement.classList.remove('bg-transparent');
        // Change text color to black
        navTextElements.forEach(function (el) {
            el.classList.add('text-black');
            el.classList.remove('text-white');
    });
 } else {
        // change navbar bg to transparent
        navElement.classList.add('bg-transparent');
        navElement.classList.remove('bg-white');

         // Revert text color to white (or your preferred default)
        navTextElements.forEach(function (el) {
            el.classList.add('text-white');
            el.classList.remove('text-black');
        });
    }
});