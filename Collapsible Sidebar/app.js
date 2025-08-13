const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    closeAllSubMenus()
}

function toggleSubMenu(button) {

    if (!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus()
    }

    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

function toggleSidebarMobile() {
    sidebar.classList.toggle("show");

    // Optional: Hide hamburger when sidebar is open
    if (sidebar.classList.contains("show")) {
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
}


// Optional: close sidebar if clicked outside on mobile
document.addEventListener("click", function (e) {
    if (
        window.innerWidth <= 768 &&
        sidebar.classList.contains("show") &&
        !sidebar.contains(e.target) &&
        e.target.id !== "hamburger"
    ) {
        sidebar.classList.remove("show");
        hamburger.style.display = "block"; // Show hamburger again
    }
});
