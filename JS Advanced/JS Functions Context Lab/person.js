function Person(first, last){
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, "fullName",{
       set: function(value){
         const name = value.split(' ');
          if(name.length !== 2){
              return;
          }

         this.firstName = name[0];
         this.lastName = name[1];
       },
       get: function(){
           return this.firstName + " " + this.lastName;
       }
    }) 
}


let person = new Person("Peter", "Ivanov");

let act1 = person.fullName;
let exp1 = "Peter Ivanov";

person.firstName = "George";
let act2 = person.fullName;
let exp2 = "George Ivanov";

person.lastName = "Peterson";
let act3 = person.fullName;
let exp3 = "George Peterson";


person.fullName = "Nikola Tesla";
let act4 = person.firstName;
let exp4 = "Nikola";

