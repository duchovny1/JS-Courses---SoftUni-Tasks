function draw(num){
    const symbol = '*';
    let array = new Array(num);
for(let a = 0; a < num - 1; a++){
     array[a] = symbol.repeat(num).split('').join(' ')
}

return array.join('\n');
}

console.log(draw(10));