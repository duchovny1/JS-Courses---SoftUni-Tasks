function solve(input){
    let solution = [];
    
    
    for(let i = 0; i < input.length; i++){
       if(input[i] == 'add'){
          solution.push(i + 1);
       }else {
           solution.pop();
       }

    }

    if(solution.length == 0){
        console.log("Empty");
    }

    solution.forEach(x => console.log(x));

}


solve(['remove', 
'remove', 
'remove']);