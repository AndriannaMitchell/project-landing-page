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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Select all sections and the navbar list
const sections = Array.from(document.querySelectorAll("section"));
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * Check if a section is in the viewport
 * This function uses getBoundingClientRect to determine if the top
 * of the section is within the viewport and returns true if it is.
 * @param {Element} section - The section element to check
 * @returns {boolean} - Returns true if the section is in the viewport
*/
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= 300;
  }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/**
 * Build the nav
 * This function loops over each section in the document,
 * creates a new list item with a link for each section,
 * and appends it to the navigation list.
*/
function buildNav() {
    sections.forEach(section => {
      const listItem = document.createElement("li"); // Create list item
      const link = document.createElement("a"); // Create anchor tag


    // Set link text to the section's data-nav attribute
    link.textContent = section.getAttribute("data-nav");
    link.setAttribute("href", `#${section.id}`);
    link.classList.add("menu__link");

    listItem.appendChild(link); // Append link to list item
    navList.appendChild(listItem); // Append list item to navbar
  });
}

// Call the function to build the navigation menu
buildNav();

// Add class 'active' to section when near top of viewport

function setActiveSection() {
    sections.forEach(section => {
      const link = document.querySelector(`a[href="#${section.id}"]`);
      
      // Toggle 'your-active-class' on the section based on viewport status
      section.classList.toggle("your-active-class", isInViewport(section));
      
      // Toggle 'active-link' on the corresponding navigation link
      link.classList.toggle("active-link", isInViewport(section));
    });
  }
  

// Scroll to anchor ID using scrollTO event

 
navList.addEventListener("click", function (event) {
    event.preventDefault();
  
    if (event.target.nodeName === "A") {
      const sectionID = event.target.getAttribute("href");
      document.querySelector(sectionID).scrollIntoView({ behavior: "smooth" });
    }
  });

/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener("scroll", setActiveSection);
// Build menu 

// Scroll to section on link click

// Set sections as active


