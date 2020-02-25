function solve(input){
  let symbol = input.pop();

  return input.join(symbol);
}

console.log(solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']))