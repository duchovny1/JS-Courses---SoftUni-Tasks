const map = {
    str: "",
    append: function(strToAdd) {
       return str += strToAdd;
    },
    remove: function(number) {
        return this.str.substring(number, str.length - 1)
    },
    removeEnd: function(number){
        return this.str.substring(0, str.length - 1 - number);
    },
    print: function(){
        console.log();
    }
    
}

function solve() {

    let str = "";

    function append(strToAdd) {
       str += strToAdd;
    };
    function removeStart(number) {
        str = str.substring(number)
    };
    function removeEnd(number){
        str = str.substring(0, str.length - number);
    };
    function print(){
        console.log(str);
    };

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solve();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();