function solve(input = []){

    let numberOfRotates = +input.pop() % input.length;
    let arr = input.slice(0, input.length);
    for(let i = 0; i < numberOfRotates; i ++){
        arr.unshift(arr.pop()); 
    }
    
    return arr.join(' ');
}


console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']))