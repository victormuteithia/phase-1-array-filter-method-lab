// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(collection, name){
    // console.log(collection, name)
    return collection.filter(function(value){
        return value.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(collection, name){
    return collection.filter((value) => {
        return value.startsWith(name)
    })
}

function matchName(collection, name){
    return collection.filter((value) => {
        return value["name"] === name
    })
}
