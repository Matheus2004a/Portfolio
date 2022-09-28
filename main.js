import { user } from "./services/api.js"
import { checkSection } from "./menus.js"
import { techs } from "./techs.js"
import { showProjects } from "./projects.js"

const sectionAboutMe = document.querySelector("#about-me")
const photo = sectionAboutMe.querySelector(".photo")
const bio = sectionAboutMe.querySelector("section h4")
const linkedin = document.querySelector(".section-social-medias a")

async function getData(url) {
    const response = await fetch(url)
    const data = await response.json().catch(error => error)
    return data
}

async function getResponse(repo) {
    const response = await getData(repo)
    return response
}

async function getUser() {
    return getResponse(user)
}

function showDataUser(user) {
    photo.src = user.avatar_url
    bio.innerHTML = `${user.bio} | ${user.location}`
    linkedin.href = user.blog
}

window.onload = async () => {
    const user = await getUser()
    showDataUser(user)
    showProjects()
}

const articleAbilities = document.querySelector("#abilities")
const section = document.querySelector("#abilities section")

techs.map(item => {
    section.innerHTML += `<figure style="color: ${item.color};">
        <span>
            <i class="${item.icon}"></i>
        </span>
        <figcaption>${item.name}</figcaption>
    </figure>`
})
articleAbilities.append(section)

const buttonTopPage = document.querySelector(".btn-top-page")
window.onscroll = () => {
    showButton()
    checkSection()
}

function showButton() {
    scrollY > 600 ? buttonTopPage.classList.add("show") : buttonTopPage.classList.remove("show")
}

const form = document.querySelector("form")
const buttonForm = form.querySelector("button[type='submit']")

form.onsubmit = () => buttonForm.disabled = true

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    keyboard: true,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
})