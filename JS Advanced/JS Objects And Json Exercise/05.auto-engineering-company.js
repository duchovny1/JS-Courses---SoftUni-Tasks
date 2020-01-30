function solve(input){
    
    let cars = {};

    for(let element of input){

        let[brand, model, price] = element.split(" | ")
        price = Number(price);
        
        let currentModel = {};
        if(!cars.hasOwnProperty(brand))   {
            cars[brand] = {};
        }
        if(!cars[brand].hasOwnProperty(model)){
            currentModel = cars[brand];
            currentModel[model] = price;
        }else {
            let currentModel = cars[brand]
            let currentPrice = currentModel[model]
            currentPrice += price;
            currentModel[model] = currentPrice
        }
        
        
        
    }

     let objects = Object.keys(cars)

     for(let car in cars){
         console.log(car)
        
         let models = cars[car];
         

         for(let model in models){
             console.log(`###${model} -> ${models[model]}`)
         }
     }
}



solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])