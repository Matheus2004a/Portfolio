import { projects } from "./images.js";

function capitalizeFirst(str) {
    const subst = str.replace(/(-|_)/g, " ")
    const stringCapitalized = subst.toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase())
    return stringCapitalized
}

export function showProjects() {
    const section = document.querySelector("#projects .swiper-wrapper")
    
    projects.map(project => {
        section.innerHTML += `<div class="swiper-slide cards">
            <figure>
                <a href="${project.homepage}" target="_blank">
                    <img src="${project.image}" alt="${project.name}">
                </a>
                <figcaption>
                    <h2>${capitalizeFirst(project.name)}</h2>
                    <p>${project.description}</p>
            
                    <button>
                        <a href="${project.html_url}" target="_blank">Mais detalhes</a>
                        <span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </button>
                </figcaption>
            </figure>
        </div>`
    })
}