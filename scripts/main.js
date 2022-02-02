import { CarBuilder } from "./CarBuilder.js"
import { getOrders } from "./database.js"

//const ordersArray = getOrders()

const mainContainer = document.querySelector(".container")


const renderAllHTML = () => {
    mainContainer.innerHTML = CarBuilder()
}




renderAllHTML()




document.addEventListener(
    "stateChanged",
    (changeEvent) => {
        console.log("state has been changed")
        renderAllHTML()
        }
)



/*
export const orders = () => {
   return `order #`
}
*/



