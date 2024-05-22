// This script used JS to trigger a dropdown menue when the burger icon is clicked
// If the document is ready, execute the code
jQuery(document).ready(function () {
    // If the burgerMenu icon is clicked, execute the code
    // ...you can change click to:
    // mouseover, mouseenter, mouseleave
    $('.burgerMenu').on('click', function () {
        // Other Options:
        // slideUp, slideDown, toggle, fadeToggle
        // And then speed
        $('.mob-nav').slideToggle('fast');
    })
}); // END OF THE BURGER MENU FUNCTION
