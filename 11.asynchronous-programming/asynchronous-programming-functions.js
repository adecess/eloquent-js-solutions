const crowTech = require("./crow-tech")
const {defineRequestType, everywhere} = crowTech

// START OF FUNCTIONS DEFINED IN CHAPTER 11 OF ELOQUENT JAVASCRIPT
function findRoute(from, to, connections) {
    let work = [{at: from, via: null}]
    for (let i = 0; i < work.length; i++) {
      let {at, via} = work[i]
      for (let next of connections.get(at) || []) {
        if (next == to) return via
        if (!work.some(w => w.at == next)) {
          work.push({at: next, via: via || next})
        }
      }
    }
    return null
}

function requestType(name, handler) {
    defineRequestType(name, (nest, content, source,
                             callback) => {
      try {
        Promise.resolve(handler(nest, content, source))
          .then(response => callback(null, response),
                failure => callback(failure))
      } catch (exception) {
        callback(exception)
      }
    })
}

requestType("connections", (nest, {name, neighbors},
        source) => {
    let connections = nest.state.connections
    if (JSON.stringify(connections.get(name)) ==
        JSON.stringify(neighbors)) return
    connections.set(name, neighbors)
    broadcastConnections(nest, name, source)
})

function broadcastConnections(nest, name, exceptFor = null) {
    for (let neighbor of nest.neighbors) {
        if (neighbor == exceptFor) continue
            request(nest, neighbor, "connections", {
            name,
            neighbors: nest.state.connections.get(name)
        })
    }
}

everywhere(nest => {
    nest.state.connections = new Map()
    nest.state.connections.set(nest.name, nest.neighbors)
    broadcastConnections(nest, nest.name)
})

function routeRequest(nest, target, type, content) {
    if (nest.neighbors.includes(target)) {
      return request(nest, target, type, content)
    } else {
      let via = findRoute(nest.name, target,
                          nest.state.connections)
      if (!via) throw new Error(`No route to ${target}`)
      return request(nest, via, "route",
                     {target, type, content})
    }
}

requestType("route", (nest, {target, type, content}) => {
    return routeRequest(nest, target, type, content)
})

function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result))
    })
}

class Timeout extends Error {}

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true
        if (failed) reject(failed)
        else resolve(value)
      });
      setTimeout(() => {
        if (done) return
        else if (n < 3) attempt(n + 1)
        else reject(new Timeout("Timed out"))
      }, 250)
    }
    attempt(1)
  })
}

requestType("storage", (nest, name) => storage(nest, name))

function anyStorage(nest, source, name) {
    if (source == nest.name) return storage(nest, name)
    else return routeRequest(nest, source, "storage", name)
}
// END OF FUNCTIONS DEFINED IN CHAPTER 11 OF ELOQUENT JAVASCRIPT

exports.anyStorage = anyStorage