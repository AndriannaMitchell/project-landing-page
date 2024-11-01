
# Dynamic Landing Page

## Project Overview

This project dynamically builds a landing page with a navigation bar that automatically populates based on the page’s content sections. As users scroll, the page highlights the active section in the viewport, and clicking a navigation link smoothly scrolls to the relevant section.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup](#setup)
5. [Usage](#usage)

## Project Structure

The project follows the structure below:

```
.
├── css
│   └── styles.css          # Contains all styling for the page
├── js
│   └── app.js              # JavaScript file for dynamic navigation and interactivity
├── index.html              # Main HTML structure of the page
└── README.md               # Documentation of the project
```

## Features

- **Dynamic Navigation**: Builds the navigation menu dynamically based on sections in the HTML.
- **Active Section Highlighting**: Highlights the active section in the viewport and the corresponding navigation link, providing clear feedback on the user’s current section.
- **Smooth Scrolling**: Adds smooth scroll behavior when a navigation item is clicked for better user experience.
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices.
- **Viewport Detection**: Uses `getBoundingClientRect()` to determine if a section is in view and sets the active class accordingly.

## Technologies Used

- **HTML5**: For structuring the web page content.
- **CSS3**: For styling the page and navigation, as well as responsive design.
- **JavaScript (ES6)**: For DOM manipulation, smooth scrolling, and dynamic navigation.

## Setup

1. Clone the repository or download the files.
2. Open the `index.html` file in your browser to view the project.

To view changes made to `styles.css` or `app.js`, refresh the page in the browser after saving your changes.

## Usage

1. **Navigation**: The navigation menu items will take you to each section smoothly when clicked.
2. **Section Activation**: As you scroll, the active section is highlighted, along with its corresponding link in the navigation bar.

Feel free to customize the content in `index.html` or add more sections—the JavaScript dynamically adapts to include any additional sections you add.

Future Improvements
Section Animations: Add animations for sections as they enter the viewport to enhance visual appeal.
Scroll Progress Indicator: Implement a progress bar to show how much of the page has been scrolled.
Back-to-Top Button: Include a button that appears when users scroll down, enabling them to quickly return to the top.
Dark Mode Toggle: Add a dark mode option for better accessibility and user preference.