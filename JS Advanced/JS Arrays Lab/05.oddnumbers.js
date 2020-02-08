function solve(params) {
   return params.filter((currentElement, index) => {
       return index % 2 != 0
   })
   .map((x) => x * 2)
   .reverse()
   .join();
  
}




console.log(solve([1, 33, 3, 76]))//44, 55, 66
