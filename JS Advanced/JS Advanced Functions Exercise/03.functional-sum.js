let add = (function() {
    let sum = 0;

    return function add(num){
        sum += num;

        add.toString = function(){
            return sum;
        }

        return add;
    }
}())

console.log(
   add(1)(5).toString()
);
console.log(add(1)(2)(3).toString());

