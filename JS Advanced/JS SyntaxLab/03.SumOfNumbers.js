function sum(min, max){
let result = 0;

for(let i = min; i <= max; i++){
result += i;
}

return result;
}


console.log(sum(0, 2))