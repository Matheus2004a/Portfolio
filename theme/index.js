const html = document.querySelector("html")
const iconTheme = document.querySelector(".switch-theme span i")

window.addEventListener("load", () => {
    getTheme()
})

function changeTheme(theme) {
    html.classList.add(theme)
    saveTheme(theme)
}

function saveTheme(theme) {
    localStorage.setItem("theme", theme)
}

function checkTheme() {
    const isLightTheme = html.classList.contains("light")
    
    isLightTheme ? (html.classList.add("dark"), html.classList.remove("light")) : (html.classList.add("light"), html.classList.remove("dark"))
    const theme = html.className
    saveTheme(theme)
}

iconTheme.onclick = () => {
    const isMoon = iconTheme.className === "fa-regular fa-moon"
    isMoon ? (iconTheme.className = "fa-regular fa-sun", checkTheme()) : (iconTheme.className = "fa-regular fa-moon", checkTheme())
}

function getTheme() {
    const theme = localStorage.getItem("theme")

    if (theme) changeTheme(theme)
}