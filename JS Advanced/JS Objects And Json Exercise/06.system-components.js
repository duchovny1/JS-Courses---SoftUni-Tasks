function systemComponents(input) {
    let systems = new Map()
    input.forEach(row => {
        let[system, component, subcomponent] = row.split(' | ')
        if(!systems.has(system)) systems.set(system, {})
        if(!systems.get(system).hasOwnProperty(component)) systems.get(system)[component] = []
        systems.get(system)[component].push(subcomponent)
    })
    let systemsSortedKeys = [...systems.keys()].sort(amountOfComponentsThenAlpabeticalSort)
    systemsSortedKeys.forEach(systemName => {
        console.log(systemName)
        let system = systems.get(systemName)
        let componentsSortedKeys = Object.keys(system).sort((a, b) => {
            return system[a].length < system[b].length
        })
        componentsSortedKeys.forEach(component => {
            console.log(`|||${component}`)
            system[component].forEach(subcomponent => {
                console.log(`||||||${subcomponent}`)
            })
        })
    })
 
    function amountOfComponentsThenAlpabeticalSort(a, b) {
        if(Object.keys(systems.get(a)).length === Object.keys(systems.get(b)).length) {
            if(a > b) return 1
            if(a < b) return -1
        } else {
            return Object.keys(systems.get(a)).length < Object.keys(systems.get(b)).length
        }
 
    }
}