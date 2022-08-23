const html = document.querySelector("html")
const iconTheme = document.querySelector(".switch-theme span i")

function changeTheme() {
    const isLightTheme = html.getAttribute("data-theme") === "light"
    isLightTheme ? html.setAttribute("data-theme", "dark") : html.setAttribute("data-theme", "light")
}

iconTheme.onclick = () => {
    const isMoon = iconTheme.className === "fa-regular fa-moon"
    isMoon ? (iconTheme.className = "fa-regular fa-sun", changeTheme()) : (iconTheme.className = "fa-regular fa-moon", changeTheme())
}