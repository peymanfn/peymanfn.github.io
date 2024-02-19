// script.js

// Get all projects
const projects = document.querySelectorAll('.project');

// Get the project window
const projectWindow = document.querySelector('.project-window');

// Initialize current project index
let currentProjectIndex = 0;

// Function to show the current project
function showCurrentProject() {
    // Hide all projects
    projects.forEach(project => {
        project.style.display = 'none';
    });

    // Show the current project
    projects[currentProjectIndex].style.display = 'block';
}

// Initial display
showCurrentProject();

// Function to move to the next project
function nextProject() {
    currentProjectIndex++;
    if (currentProjectIndex >= projects.length) {
        currentProjectIndex = 0; // Loop back to the first project
    }
    showCurrentProject();
}

// Function to move to the previous project
function prevProject() {
    currentProjectIndex--;
    if (currentProjectIndex < 0) {
        currentProjectIndex = projects.length - 1; // Loop to the last project
    }
    showCurrentProject();
}

// Event listeners for next and previous buttons
document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');

    nextButton.addEventListener('click', nextProject);
    prevButton.addEventListener('click', prevProject);
});