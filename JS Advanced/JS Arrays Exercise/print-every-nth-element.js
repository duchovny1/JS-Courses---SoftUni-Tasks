function solve(input){
    let step = +input.pop();
     
    let arr = [];

    for(let i = 0; i < input.length; i+= step){
        arr.push(input[i])
    } 

    return arr;
    
  }
  
  console.log(solve(['5', 
  '20', 
  '31', 
  '4', 
  '20', 
  '2']))