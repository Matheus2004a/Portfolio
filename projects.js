export function showProjects(projects) {
    const section = document.querySelector("#projects .swiper-wrapper")

    const projectsFiltered = projects.filter(project => project.homepage !== null && project.homepage !== "")

    projectsFiltered.map(project => {
        section.innerHTML += `<div class="swiper-slide cards">
            <a href="${project.homepage}" target="_blank">
                <figure>
                    <img src="https://raw.githubusercontent.com/Matheus2004a/ecommerce_products/master/design/desktop-preview.jpg"
                        alt="pricing-toggle">
                    <figcaption>
                        <h2>${project.name.replaceAll("-", " ")}</h2>
                        <p>${project.description}</p>
            
                        <h3>Tecnologias Usadas</h3>
                        <div class="container-img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                                alt="icon-react">
                            <img src="https://logospng.org/download/css-3/logo-css-3-1536.png"
                                alt="icon-css3">
                        </div>
            
                        <button>
                            <a href="${project.html_url}" target="_blank">Mais detalhes</a>
                            <span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                    </figcaption>
                </figure>
            </a>
        </div>`
    })
}