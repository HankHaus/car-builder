import { CarBuilder } from "./CarBuilder.js"

const mainContainer = document.querySelector(".container")

const renderAllHTML = () => {
    mainContainer.innerHTML = "hello"
}

renderAllHTML()
/*
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)*/