export function showProjects(projects) {
    const section = document.querySelector("#projects .swiper-wrapper")

    const projectHasSite = project => project.homepage !== null && project.homepage !== ""  
    const projectsFiltered = projects.filter(projectHasSite)

    projectsFiltered.map(project => {
        section.innerHTML += `<div class="swiper-slide cards">
            <figure>
                <a href="${project.homepage}" target="_blank">
                    <img src="https://raw.githubusercontent.com/Matheus2004a/ecommerce_products/master/design/desktop-preview.jpg"
                    alt="pricing-toggle">
                </a>
                <figcaption>
                    <h2>${project.name.replaceAll("-", " ")}</h2>
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