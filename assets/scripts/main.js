const theme = document.getElementById("toggleTheme")
function toggleTheme() {
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')

    theme.classList.toggle("bi-sun")
    theme.classList.toggle("bi-moon-stars")
}