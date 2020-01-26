function aggregate(...params){

    return [
         params.reduce(((a, b) => a + b)),
         params.reduce((a, b) => a + 1/b),
         params.reduce((a, b) => a + b.toString())
    ]
    
    
}

console.log(aggregate(2,2,2).join('\n'));