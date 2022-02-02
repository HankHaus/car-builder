import { getWheels, setWheels } from "./database.js"

const wheelsArray = getWheels()

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel package</option>'

    for (const wheel of wheelsArray) {
        html += `<option value="wheel--${wheel.id}">${wheel.type}</option>`
    }

    html += "</select>"
    return html

}

document.addEventListener(
    "change",
    (changeEvent) => {
        const itemClicked = changeEvent.target
        if (itemClicked.id.startsWith("wheels")) {
            const [,wheelId] = itemClicked.value.split("--")

            for (const wheel of wheelsArray) {
                if (wheel.id === parseInt(wheelId)) {
                    setWheels(parseInt(wheelId))
                }
            }
        }
    }
)