import { getColors, setColor } from "./database.js"

const colorsArray = getColors()

export const Colors = () => {
    let html = "<h2>Paint Colors</h2>"

    html += '<select id="color">'
    html += '<option value="0">Select a paint color</option>'

    for (const color of colorsArray) {
        html += `<option value="color--${color.id}">${color.color}</option>`
    }




    html += "</select>"
    return html
    
}


document.addEventListener(
    "change",
    (changeEvent) => {
        const itemClicked = changeEvent.target
        if (itemClicked.id.startsWith("color")) {
            const [,colorId] = itemClicked.value.split("--")

            for (const color of colorsArray) {
                if (color.id === parseInt(colorId)) {
                    setColor(parseInt(colorId))
                }
            }
        }
    }
)

