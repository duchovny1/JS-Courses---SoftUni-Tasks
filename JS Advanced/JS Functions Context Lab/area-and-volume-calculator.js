function area(){
    return this.x * this.y;
}

function volume(){
    return this.x * this.y * this.z;
}

function calc(area, volume, jsonString){
     const objectArray = JSON.parse(jsonString);
     return objectArray.map(obj => {
         const a = Math.abs(area.call(obj));
         const v = Math.abs(volume.call(obj));
         return { area: a, volume: v}
     })
}



let jsonString = '[{ \"x\": 1, \"y\":2, \"z\": 10}, { \"x\": 7, \"y\": 7, \"z\": 10}, { \"x\": 7, \"y\":7, \"z\": 10}]'

console.log(calc(area, volume, jsonString));