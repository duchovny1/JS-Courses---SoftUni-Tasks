function stringLenghth(...params){
     let sum = params.reduce((a, b) => a + b.length, 0);
     let avr = Math.floor(sum / params.length);

     return [sum, avr]
}



console.log(stringLenghth('chocolate', 'ice cream', 'cake').join('\n'))