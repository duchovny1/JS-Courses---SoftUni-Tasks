let input = ['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']

console.log(solve(input));

function solve(input){

    let allHeroes = [];
     
    for(let i = 0; i < input.length; i++){

        let [name, level, items] = input[i].split(" / ");
        level = Number(level);
        items = items ? items.split(', ') : [];

        allHeroes.push({name, level, items});
    }

    return JSON.stringify(allHeroes);
}
    
    // }
    
