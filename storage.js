// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

// Craft data items
const  cItem1 = {
    name: "Some thing",
    location: "bedroom",
    description: "description"
}

const cItem2 = {
    name: "another item",
    location: "bathroom",
    description: "another description"
}
const cItem3 = {
    name: "more craft items",
    location: "living room",
    description: "third description"
}

// Furniture data items
const fItem1 = {
    name: "couch",
    location: "living room",
    description: "I sit on it"
}

const fItem2 = {
    name: "Bed",
    location: "bedroom",
    description: "I sleep on it"
}

const fItem3 = {
    name: "rug",
    location: "living room",
    description: "really ties the room together"
}

//Electronics data items

const eItem1 = {
    name: "tv",
    location: "living room",
    description: "I watch it"
}

const eItem2 = {
    name: "computer",
    location: "bedroom",
    description: "I live on it"
}

const eItem3 = {
    name: "ps4",
    location: "living room",
    description: "I play on it"
}

const eItem4 = {
    name: "Nintendo Switch",
    location: "anywhere",
    description: "I play it anywhere"
}



// Adding objects to database
HomeInventoryDatabase.crafts.push(cItem1)
HomeInventoryDatabase.crafts.push(cItem2)
HomeInventoryDatabase.crafts.push(cItem3)


HomeInventoryDatabase.furniture.push(fItem1)
HomeInventoryDatabase.furniture.push(fItem2)
HomeInventoryDatabase.furniture.push(fItem3)

HomeInventoryDatabase.electronics.push(eItem1)
HomeInventoryDatabase.electronics.push(eItem2)
HomeInventoryDatabase.electronics.push(eItem3)
HomeInventoryDatabase.electronics.push(eItem4)


console.log(HomeInventoryDatabase)



const saveDatabase = function (database, localStorageKey) {
    localStorage.setItem(localStorageKey, JSON.stringify(database))
}

const loadDatabase = function (localStorageKey) {
   return JSON.parse(localStorage.getItem(localStorageKey))
}

saveDatabase(HomeInventoryDatabase, "HomeInventory")