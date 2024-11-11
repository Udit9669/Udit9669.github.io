// Apply dark mode on page load if previously set
document.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
});

// Dark mode toggle and save to localStorage
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// Shrink header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header.sticky');
    if (window.scrollY > 50) {  // Adjust this value to control when the header should shrink
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});