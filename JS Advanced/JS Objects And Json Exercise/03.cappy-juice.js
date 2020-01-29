let input = ['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']


function sum(input){
    
    
    let juices = {};
    let bottles = {};

    input
     .forEach((line) => {
        let [name, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if(!juices.hasOwnProperty(name)){
            juices[name] = 0;
        }

        juices[name] += quantity;
        

        if(juices[name] >= 1000){
            bottles[name] = Math.trunc(juices[name] / 1000);
        }
     });

     for(let name in bottles){
         console.log(`${name} => ${bottles[name]}`)
     }

    
}


sum(input);