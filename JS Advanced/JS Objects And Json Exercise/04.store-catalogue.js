let input = ['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']


function sort(input){
     

    let sortedProducts = {};
    

    for(let line of input) {

        let [name, price] = line.split(" : ")
        price = Number(price);
    
         if(!sortedProducts.hasOwnProperty(name[0])){
            sortedProducts[name[0]] = {};
         }
        
        let products = sortedProducts[name[0]]

        products[name] = price;
    }
    
   console.log(sortedProducts)
}


sort(input);