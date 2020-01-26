const days = {
    "Monday": 1,
    "Friday": 5
}


function printDays(map, str){
    return map[str] ? map[str] : "error";
}

console.log(printDays(days, "Monday"));
console.log(printDays(days, "Invalid"));
