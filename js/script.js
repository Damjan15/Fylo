const button = document.getElementById("theme-toggle")
const darkIcon = document.getElementById("theme-toggle-dark-icon")
const lightIcon = document.getElementById("theme-toggle-light-icon")

// Check if we are in dark or light mode and show the correct icon
if (localStorage.getItem("color-theme") === 'dark' || (!('color-theme') in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Show light icon
    lightIcon.classList.remove('hidden')
} else {
    // Show dark icon
    darkIcon.classList.remove('hidden')
}


// Listen for toggle button click
button.addEventListener("click", toggleMode);

function toggleMode() {
    // Toggle icon
    darkIcon.classList.toggle('hidden')
    lightIcon.classList.toggle('hidden')

    // If is set in Local Storage
    if (localStorage.getItem('color-theme')) {
        // If light, make dark and save in local storage
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add("dark")
            localStorage.setItem('color-theme', 'dark')
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem('color-theme', 'light')
        }
    } else {
        // If not in local storage
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem('color-theme', 'dark')
        }
    }
}