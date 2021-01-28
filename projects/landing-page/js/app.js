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
const navbarList = document.getElementById("#navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createHtmlItem(id, name){
    const HtmlItem = `<a class="menu_link" data-id="${id}">${name}<\a>`;
    return HtmlItem;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
function makeActive(){
    for (let i=0; i<sections.length; i++){
        const view = section[i].getBoundingClientRect();
        if (view.top >= 100 && view.bottom <=100){
            section[i].classList.add("active");
        }
        else{
            section[i].classList.remove("active");
        }
    }
}



// Scroll to anchor ID using scrollTO event
function scrollToEvent(){
    const to_scroll = document.querySelectorAll("a");
    for (let i = 0; i<= sections.length; i++){
        const pos = section[i].getBoundingClientRect().top + window.pageYOffset;
        to_scroll[i].addEventListener('scroll', function(){
            window.scrollTo({pos, behavior: 'smooth'})
        });
    }
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu


// Scroll to section on link click

// Set sections as active


