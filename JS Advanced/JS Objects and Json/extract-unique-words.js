function solve(data){
    return [
        ...new Set(data
            .join("")
            .toLowerCase()
            .match(/\w+/gim))
    ]
       .join
}