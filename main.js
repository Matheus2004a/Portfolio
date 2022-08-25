import { techs } from "./techs.js";
import { user, repositories } from "./services/api.js"

const sectionAboutMe = document.querySelector("#about-me")
const photo = sectionAboutMe.querySelector(".photo")
const bio = sectionAboutMe.querySelector("section h4")
const linkedin = document.querySelector(".section-social-medias a")

async function getData(url) {
    const data = await fetch(url).then(status => status.json()).then(response => response).catch(error => error)
    return data
}

async function getUser() {
    const response = await getData(user)
    return response
}

async function getRepos() {
    const response = await getData(repositories)
    return response
}

window.onload = async () => {
    const [user, repos] = await Promise.all([getUser(), getRepos()])

    photo.src = user.avatar_url
    bio.innerHTML = `${user.bio} | ${user.location}`
    linkedin.href = user.blog
}

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

const form = document.querySelector("form")
const buttonForm = form.querySelector("button[type='submit']")

form.onsubmit = () => {
    buttonForm.disabled = true
}

const swiper = new Swiper('.swiper', {
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true // Wrapper cobre todo o conteúdo do slide
        },
        700: {
            slidesPerView: 1,
            setWrapperSize: true
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
})