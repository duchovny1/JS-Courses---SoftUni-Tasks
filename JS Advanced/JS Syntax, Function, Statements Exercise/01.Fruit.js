function sum(str, weigth, price){
     

    let weigthInKg = (weigth/1000);
    let totalPrice = weigthInKg * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${str}.`)
}


sum('apple', 1563, 2.35) 