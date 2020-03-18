const map = {
    separator: ",",
    symbol: "$",
    symbolFirst: true,
}



function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (map[symbolFirst]) {
        return symbol + ' ' + result
    }
    else {
        return result + '' + symbol;
    }
}



function solve(currencyFormatter) {
    function dollarFormatter(value) {
        return currencyFormatter(map["separator"], map["symbol"], map["symbolFirst"], value);
    }

    return dollarFormatter;
}


let dollarFormatter = solve(currencyFormatter);
console.log(dollarFormatter(5345));
