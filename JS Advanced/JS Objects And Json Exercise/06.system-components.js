const sortByAmounInDesc = (a,b) => a - b;


function orderItems(input){
     let sortedArray = new Map();

    for(let item of input){
       let [system, component, subcomponent] = item.split(" | ");

       if(!sortedArray.hasOwnProperty(system)){
           sortedArray[system] = [];
       }

       if(!sortedArray[system].hasOwnProperty(component)){
           sortedArray[system][component] = [];
       }


       sortedArray[system][component].push(subcomponent);
        
    }

    let systemsSorted = Object.keys(sortedArray).sort(amountOfComponentsThenAlphabeticaSort)
                      



    for(let item of systemsSorted){ 
        console.log(item)
        let a = sortedArray[item];
        
        let componentsSorted = Object.keys(a)
                             .sort((a, b) => {
                                 return item[a].length < item[b].length
                             })


        for(let arr in componentsSorted){
            console.log(`|||${arr}`)
            
            let components = sortedArray[item]
            
            for(let key in components[arr]){
                console.log(`||||||${components[arr][key]}`)
            }
        }
    }

   

    function amountOfComponentsThenAlphabeticaSort(a,b){
        if(Object.keys(sortedArray[a]).length === Object.keys(sortedArray[b]).length){
            if(a > b){
                return  1
            }
            if(b < a){
                return - 1
            }
        }
        else {
            return Object.keys(sortedArray[a].length < Object.keys(sortedArray[b]).length)
        }
    }
}






orderItems(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'])