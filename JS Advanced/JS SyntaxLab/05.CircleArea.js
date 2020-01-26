function circleArea(radius){
       let inputType = typeof(radius);
       

      if(inputType === 'number'){
          let result = Math.pow(radius, 2) * Math.PI;
          return result.toFixed(2);
      }
      else
      {
          return `We can not calculate the circle area, because we receive a ${typeof radius}.`;
        }
}

console.log(circleArea(5));