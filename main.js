import { techs } from "./techs.js";

const articleAbilities = document.querySelector("#abilities")
const section = document.querySelector("#abilities section")

techs.map(item => {
    section.innerHTML += `<figure>
        <span>
            <i class="${item.icon}"></i>
        </span>
        <figcaption>${item.name}</figcaption>
    </figure>`
})
articleAbilities.append(section)

const buttonTopPage = document.querySelector(".btn-top-page")
window.addEventListener("scroll", showButton)

function showButton() {
    scrollY > 600 ? buttonTopPage.classList.add("show") : buttonTopPage.classList.remove("show")
}

const selectLanguage = document.querySelector("select")

selectLanguage.onchange = (e) => {
    const options = selectLanguage.options[selectLanguage.selectedIndex].value
    const flag = document.querySelector(".flag img")
    
    const isBr = options === "pt"
    isBr ? flag.src = "./assets/svg/flag-br.svg" : flag.src = "./assets/svg/flag-us.svg"
}

const form = document.querySelector("form")
const buttonForm = form.querySelector("button[type='submit']")

form.onsubmit = () => {
    buttonForm.disabled = true
}