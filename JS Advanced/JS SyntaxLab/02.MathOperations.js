const operationsMaps = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y
}

function sum(operator, ...params) {
    return params
    .reduce((a, b) => operationsMaps[operator](
        a, Number(b)
    ),
    Number(params.shift()))
}

console.log(sum("+", 2, 3, 5))
