const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial state
document.documentElement.setAttribute('data-theme', currentTheme);
updateButtonText(currentTheme);

toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
});

function updateButtonText(theme) {
    // Simple text toggle, can be replaced with SVG icons
    toggleBtn.innerText = theme === 'dark' ? '☀ Light' : '☾ Dark';
}