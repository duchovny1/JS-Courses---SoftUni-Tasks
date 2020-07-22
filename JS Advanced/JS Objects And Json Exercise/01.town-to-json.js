const deleteEmptyEntires = x => x !== "";
const trim = x => x.trim();
const parseIfNumber = x => Number(x) ? Math.floor((Number(x) * 100) / 100) : x

function deserializeStringToArrayValues(arr){

    return arr
           .split('|')
           .filter(deleteEmptyEntires)
           .map(trim)
           .map(parseIfNumber)
}

function convertTownsToJson(arr){
   
    let exctractkeys = deserializeStringToArrayValues(arr[0]);
    return values = arr
    .slice(1)
    .map(x => deserializeStringToArrayValues(x))
    .map(x => x.reduce((result, val, i) =>

               {
                  result[exctractkeys[i]] = val;
                  return result;
               }, {}))

}

console.log(convertTownsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));