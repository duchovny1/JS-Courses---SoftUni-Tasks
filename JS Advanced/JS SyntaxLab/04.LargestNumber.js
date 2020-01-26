function largestNum(...params){
      return `The largest number is ${params.sort((a,b) => a - b).pop()}.`;
}


console.log(largestNum(2, -5, -7, 15));