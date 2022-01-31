import { Technologies } from "./Technologies.js"
import { Paints } from "./Paints.js"
import { Wheels } from "./Wheels.js"
import { Interiors } from "./Interiors.js"



export const CarBuilder = () => {
 return `${Technologies()}
${Paints()}
${Wheels()}
${Interiors()}` 

}