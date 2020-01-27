
function calorieObj(arr){
     
    let obj = {};
    

    for(let i = 0; i < arr.length;i+=2){
      obj[arr[i]] = +arr[i+ 1];
    }

    console.log(obj)
}


let arr = ['Yoghurt', 48, 'Rise', 138, 'Apple', 52];
calorieObj(arr);
