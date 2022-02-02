const database = {
    colors: [
        {id: 1, color: "Silver", price: 1100},
        {id: 2, color: "Midnight Blue", price: 850},
        {id: 3, color: "Firebrick Red", price: 1350},
        {id: 4, color: "Spring Green", price: 700}
    ],

    interiors: [
        {id: 1, type: "Beige Fabric", price: 3000},
        {id: 2, type: "Charcoal Fabric", price: 2280},
        {id: 3, type: "White Leather", price: 4550},
        {id: 4, type: "Black Leather", price: 4000}
    ],

    technologies: [
        {id: 1, type: "Basic Package (basic sound system)", price: 4300},
        {id: 2, type: "Navigation Package (includes integrated navigation controls)", price: 5600},
        {id: 3, type: "Visibility Package (includes side and reat cameras)", price: 6300},
        {id: 4, type: "Ultra Package (includes navigation and visibility packages)", price: 7000}
    ],

    wheels: [
        {id: 1, type: "17-inch Pair Radial", price: 2000},
        {id: 2, type: "17-inch Pair Radial Black", price: 3000},
        {id: 3, type: "18-inch Pair Spoke Silver", price: 3500},
        {id: 4, type: "18-inch Pair Spoke Black", price: 4000}
    ],

    orderBuilder: {

    },

    customOrders : [
        {
            id: 1,
            colorId: 2,
            wheelId: 3,
            technologyId: 2,
            interiorId: 2
        }
    ]
    

}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}




export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}


export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}





export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
