import { Technologies } from "./Technologies.js"
import { Colors } from "./Paints.js"
import { Wheels } from "./Wheels.js"
import { Interiors } from "./Interiors.js"
import { addCustomOrder } from "./database.js"
import { orders } from "./Orders.js"


document.addEventListener(
    "click",
    (event) => { 
        if (event.target.id === "orderButton") {
            addCustomOrder()
            
        } 
        
    }
)


export const CarBuilder = () => {
 return `${Technologies()}
${Colors()}
${Wheels()}
${Interiors()}
<article>
<button id="orderButton">Create Custom Order</button>

</article>
<div>${orders()} </div>`
/* if you want to backtrack, this goes inside the interpolation
${order()} 
*/
}

