# settings.js placeholder
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const userNameInput = document.getElementById('user-name-input');
    const profileUpload = document.getElementById('profile-upload');
    const profileImg = document.getElementById('profile-img');

    // Dark mode toggle
    darkModeToggle.addEventListener('change', function() {
        const isDarkMode = this.checked;
        setDarkMode(isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
    });

    // User name input
    userNameInput.addEventListener('change', function() {
        const name = this.value;
        localStorage.setItem('userName', name);
        // Update the dashboard's welcome message without reloading the entire app?
        // We can set it in localStorage and when the dashboard loads, it will pick it up.
    });

    // Profile picture upload
    profileUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImg.src = e.target.result;
                localStorage.setItem('profilePic', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Load profile picture if exists
    const savedProfilePic = localStorage.getItem('profilePic');
    if (savedProfilePic) {
        profileImg.src = savedProfilePic;
    }
});
