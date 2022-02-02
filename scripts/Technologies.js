import { getTechnologies, setTechnology } from "./database.js"

const technologyArray = getTechnologies()

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="technology">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of technologyArray) {
        html += `<option value="technology--${tech.id}">${tech.type}</option>`
    }

    html += "</select>"
    return html
    
}



document.addEventListener(
    "change",
    (changeEvent) => {
        const itemClicked = changeEvent.target
        if (itemClicked.id.startsWith("technology")) {
            const [,technologyId] = itemClicked.value.split("--")

            for (const technology of technologyArray) {
                if (technology.id === parseInt(technologyId)) {
                   setTechnology(parseInt(technologyId))
                }
            }
        }
    }
)
