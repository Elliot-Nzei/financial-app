# script.js placeholder
// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);

    // Set the dark mode toggle switch if it exists on the page
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.checked = isDarkMode;
    }

    // Set the user name if it exists in localStorage
    const userName = localStorage.getItem('userName');
    if (userName) {
        const userNameElements = document.querySelectorAll('#user-name, #user-name-input');
        userNameElements.forEach(el => {
            if (el.id === 'user-name') {
                el.textContent = userName;
            } else if (el.id === 'user-name-input') {
                el.value = userName;
            }
        });
    }
});

function setDarkMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
}
