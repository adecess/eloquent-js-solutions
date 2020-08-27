// Got crow-tech on Marijn Haverbeke's Github repo
const crowTech = require("./crow-tech")
const {bigOak} = crowTech

const functions = require("./asynchronous-programming-functions")
const {anyStorage} = functions

async function locateScalpel(nest) {
    let current = nest.name
    while(true) {
        let next = await anyStorage(nest, current, "scalpel")
        if(next === current) {
            return current
        }
        current = next;
    }
}

function locateScalpel2(nest) {
    let current = nest.name
    function loop(location) {
        return anyStorage(nest, location, "scalpel").then(next => {
            if(next === location) return location
            else return loop(next)
        })
    }
    return loop(current)
}

locateScalpel(bigOak).then(console.log);
locateScalpel2(bigOak).then(console.log);