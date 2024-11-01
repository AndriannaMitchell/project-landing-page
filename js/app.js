// Select all sections and the navbar list
const sections = Array.from(document.querySelectorAll("section"));
const navList = document.getElementById("navbar__list");

/**
 * Check if a section is in the viewport
 * This function uses getBoundingClientRect to determine if the top
 * of the section is within the viewport and returns true if it is.
 * @param {Element} section - The section element to check
 * @returns {boolean} - Returns true if the section is in the viewport
 */
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return rect.top >= -200 && rect.top <= 200;
}

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

/**
 * Set active section and link
 * This function adds an 'active' class to the section and link in the viewport
 */
function setActiveSection() {
    let activeSet = false; // Flag to stop after finding the first active section

    sections.forEach(section => {
        const link = document.querySelector(`a[href="#${section.id}"]`);
        
        // Clear 'active' class from all links and sections
        link.classList.remove("active-link");
        section.classList.remove("your-active-class");

        if (!activeSet && isInViewport(section)) {
            // Add active class to the first section in viewport
            section.classList.add("your-active-class");
            link.classList.add("active-link");
            activeSet = true; // Set flag to true after finding the active section
        }
    });
}

// Smooth scroll to section on link click
navList.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.nodeName === "A") {
        const sectionID = event.target.getAttribute("href");
        document.querySelector(sectionID).scrollIntoView({ behavior: "smooth" });
    }
});

/**
 * Event listeners
 */
document.addEventListener("scroll", setActiveSection);
