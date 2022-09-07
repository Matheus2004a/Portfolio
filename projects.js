const details = [
    {
        image: "https://github.com/Matheus2004a/Weather-App/raw/main/design/weather.png",
        website: "https://weather-osuopckm8-matheus2004a.vercel.app/",
        repo: "Weather App",
        description: "Aplicação que exibe dados do clima de uma região pesquisada em tempo real.",
        link: "https://github.com/Matheus2004a/Weather-App"
    },
    {
        image: "https://raw.githubusercontent.com/Matheus2004a/ecommerce_products/master/design/desktop-preview.jpg",
        website: "https://ecommerce-products-5m70nh68a-matheus2004a.vercel.app/",
        repo: "Seção de ecommerce de produto",
        description: "Seção de descrição de um produto de um ecommerce fictício.",
        link: "https://github.com/Matheus2004a/ecommerce_products"
    },
    {
        image: "https://github.com/Matheus2004a/App-ToDo/raw/master/design/app-todo.png",
        website: "https://matheus2004a.github.io/App-ToDo/",
        repo: "App de tarefas",
        description: "Aplicação para fazer registro de tarefas a serem feitas, marcá - las como concluídas e sua excluí - las.",
        link: "https://github.com/Matheus2004a/App-ToDo"
    },
    {
        image: "https://github.com/Matheus2004a/Interactive-Pricing/raw/master/design/desktop-preview.jpg",
        website: "https://matheus2004a.github.io/Interactive-Pricing/",
        repo: "Preço Interativo",
        description: "Componente interativo onde é possível visualizar a mudança de valores conforme interação com a barra e o clique no botão toogle.",
        link: "https://github.com/Matheus2004a/Interactive-Pricing"
    },
    {
        image: "https://github.com/Matheus2004a/Calculator-App/raw/master/design/desktop-design-empty.jpg",
        website: "https://matheus2004a.github.io/Calculator-App/",
        repo: "Cálculo de gorjetas",
        description: "Aplicação que calcula o custo total de uma conta de acordo com a quantidade de pessoas e acrescido com o valor (%) da gorjeta.",
        link: "https://github.com/Matheus2004a/Calculator-App"
    },
    {
        image: "https://github.com/Matheus2004a/Signup-Form-Master/raw/master/design/desktop-preview.jpg",
        website: "https://matheus2004a.github.io/Signup-Form-Master/",
        repo: "Validação de formulário",
        description: "Formulário que contém validações individuais para cada campo de forma interativa e inclusive validação para e-mail.",
        link: "https://github.com/Matheus2004a/Signup-Form-Master"
    },
]

export function showProjects() {
    const section = document.querySelector("#projects .swiper-wrapper")

    details.map(project => {
        section.innerHTML += `<div class="swiper-slide cards">
            <figure>
                <a href="${project.website}" target="_blank">
                    <img src="${project.image}"
                    alt="pricing-toggle">
                </a>
                <figcaption>
                    <h2>${project.repo.replaceAll("-", " ")}</h2>
                    <p>${project.description}</p>
            
                    <button>
                        <a href="${project.link}" target="_blank">Mais detalhes</a>
                        <span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </button>
                </figcaption>
            </figure>
        </div>`
    })
}