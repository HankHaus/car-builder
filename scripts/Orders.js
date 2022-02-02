
import { getColors } from "./database.js";
import { getInteriors } from "./database.js";
import { getOrders } from "./database.js";
import { getTechnologies } from "./database.js";
import { getWheels } from "./database.js";




const carOrders = getOrders()

/*
const buildOrder = (order) => {
    return `${order.id}`
}

export const order = () => {
let html = `<ul>`

const list = carOrders.map(buildOrder)

html += list.join("")

html += `</ul>`
return html
}
*/

const buildOrderListItem = (order) => {

    const colors = getColors()
    const foundPaintColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )

    const techs = getTechnologies()
    const foundTechnology = techs.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )

    const wheels = getWheels()
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const interiors = getInteriors()
    const foundinterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    let totalCost = foundPaintColor.price + foundTechnology.price + foundWheel.price + foundinterior.price

    const costString = totalCost.toLocaleString('en-US', {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} cost ${costString}
    </li>
    `
}
//${order.id}

export const orders = () => {
    const orders = getOrders()
    let html = `<ul>`
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += `</ul>`
    return html
}