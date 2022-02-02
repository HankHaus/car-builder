import { getInteriors, setInterior } from "./database.js"

const interiorsArray = getInteriors()

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior package</option>'

    for (const interior of interiorsArray) {
        html += `<option value="interior--${interior.id}">${interior.type}</option>`
    }

    html += "</select>"
    return html
    
}


document.addEventListener(
    "change",
    (changeEvent) => {
        const itemClicked = changeEvent.target
        if (itemClicked.id.startsWith("interior")) {
            const [,interiorId] = itemClicked.value.split("--")

            for (const interior of interiorsArray) {
                if (interior.id === parseInt(interiorId)) {
                   setInterior(parseInt(interiorId))
                }
            }
        }
    }
)
