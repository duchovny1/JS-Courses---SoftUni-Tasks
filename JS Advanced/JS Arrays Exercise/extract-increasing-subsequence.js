function solve(input){
    
    let result = [];
    let firstElement = input.slice(0,1);
    result.push(firstElement);


    for(let i = 1; i < input.length; i++){
        if(input[i] > Math.max(...result)){
            result.push(input[i]);
        }
    }
    

    return result.join("\n");

}



let arr = [1, 
    2, 
    3,
    4];

console.log(solve(arr));
