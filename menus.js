const backdrop = document.querySelector("header .backdrop")
const menu = document.querySelector("header nav")
const iconMenu = document.querySelector("header .menu")
const iconClose = document.querySelector("header .close")
const items = menu.querySelectorAll("li")

iconMenu.onclick = () => {
    menu.classList.add("show")
    backdrop.classList.add("show")
}

function removeMenu() {
    menu.classList.remove("show")
    backdrop.classList.remove("show")
}

iconClose.onclick = () => {
    removeMenu()
}

backdrop.onclick = () => {
    removeMenu()
}

items.forEach(item => {
    item.onclick = () => {
        removeMenu()
    }
})

const articles = document.querySelectorAll("article[id]")

export function checkSection() {
    const sectionChecked = window.pageYOffset + (window.innerHeight / 8) * 4

    articles.forEach(article => {
        const sectionTop = article.offsetTop
        const sectionHeight = article.offsetHeight
        const sectionId = article.getAttribute("id")

        const initPoint = sectionChecked >= sectionTop
        const finalPoint = sectionChecked <= sectionTop + sectionHeight

        const menu = document.querySelector("nav ul li a[href*=" + sectionId + "]")
        initPoint && finalPoint ? menu.classList.add("active") : menu.classList.remove("active")
    })
}