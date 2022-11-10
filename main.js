import { user, repositories } from "./services/api.js"
import { checkSection } from "./menus.js"
import { techs } from "./techs.js"
import { showProjects } from "./projects.js"
import { calcAge } from "./age.js"

const sectionAboutMe = document.querySelector("#about-me")
const photo = sectionAboutMe.querySelector(".photo")
const linkedin = document.querySelector(".section-social-medias a")
const elSectionAboutMe = sectionAboutMe.querySelector("section")
const paragraph = elSectionAboutMe.querySelector("p")

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

async function getRepos() {
    return getResponse(repositories)
}

function showDataUser(user) {
    const bio = document.createElement("h4")
    photo.src = user.avatar_url
    bio.innerHTML = `${user.bio} | ${user.location}`
    elSectionAboutMe.insertBefore(bio, paragraph)
    linkedin.href = user.blog
}

function showMyAge() {
    const age = calcAge()

    const contentAge = document.createElement("p")
    contentAge.innerHTML = `Meu nome é Matheus Aurélio, tenho ${age} anos, sou Desenvolvedor Front-End e Técnico em Desenvolvimento de Sistemas, tendo como objetivo atuar no desenvolvimento de interfaces com foco em experiência para o usuário.`
    
    elSectionAboutMe.querySelector("h4").after(contentAge)
}

window.onload = async () => {
    const [user, repos] = await Promise.all([getUser(), getRepos()])
    showDataUser(user)
    showProjects(repos)
    showMyAge()
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

$('#phone').mask('(00) 00000-0000')

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