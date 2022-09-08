const body = document.querySelector("body")
const iconTheme = document.querySelector(".switch-theme i")

window.addEventListener("DOMContentLoaded", () => {
    getTheme()
})

function changeTheme(theme, icon) {
    body.classList.add(theme)
    iconTheme.className = icon
}

function saveTheme(theme, icon) {
    localStorage.setItem("theme", theme)
    localStorage.setItem("icon", icon)
}

function checkTheme(icon) {
    let theme = body.className
    const isLightTheme = theme === "" || theme === "light"

    isLightTheme ? (body.classList.remove("light"), body.classList.add("dark")) : (body.classList.remove("dark"), body.classList.add("light"))
    theme = body.className

    saveTheme(theme, icon)
}

iconTheme.onclick = (e) => {
    const isMoon = e.target.className === "fa-regular fa-moon"
    isMoon ? (iconTheme.className = "fa-regular fa-sun", checkTheme(iconTheme.className)) : (iconTheme.className = "fa-regular fa-moon", checkTheme(iconTheme.className))
}

function getTheme() {
    const theme = localStorage.getItem("theme")
    const icon = localStorage.getItem("icon")

    if (theme) changeTheme(theme, icon)
}