function func(num){

    let str = num.toString();
    let firstNum = str[0];
    let sumResult = 0;
    let result = true;

    for(let i = 0; i < str.length; i++){
        if(firstNum != str[i]){
          result = false;
        }

        sumResult += +str[i];

    }
    
    console.log(result);
    console.log(sumResult);
}


func(2222)