/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
function makeActive(sections){
    for (const section of sections){
        const view = section.getBoundingClientRect();
        if (view.top <= 100 && view.bottom >=100){
            section.classList.add("active");
        }
        else{
            section.classList.remove("active");
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scroll(){
    const to_scroll = document.querySelectorAll("a");
    for (let i = 0; i<= sections.length; i++){
        const pos = section[i].getBoundingClientRect().top + window.pageYOffset;
        to_scroll[i].addEventListener('scroll', function(){
            window.scrollTo({pos, behavior: 'smooth'})
        });
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu


// Scroll to section on link click

// Set sections as active


