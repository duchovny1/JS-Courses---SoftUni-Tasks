function solve(input){
    
    let sum = input[0].reduce((a,b) => a + b);
     for(let i  = 0; i < input.length; i++){

        let sumFirstRow = input[i].reduce((a,b) => a + b);
        
        if(sum !== sumFirstRow){
            return false;
        }


        let colSum = 0;

        for(let j = 0; j < input.length; j++){
            colSum += input[j][i];
        }

        if(sum !== colSum){
            return false;
        }
     }

     return true;

}


console.log(solve([[0, 1, 0],
    [0, 8, 1],
    [0, 0, 9]]))