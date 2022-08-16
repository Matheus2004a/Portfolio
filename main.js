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