// function Details(){
//     this.name = "pooja";
//     this.age = 21;
//     this.address = "sankeshwar";
// }

// let user = new Details();
// console.log(user);
// console.log(user.name);

 function Details(naam,umar,isthan){
    this.name = naam;
    this.age = umar;
    this.address = isthan;
    this.description=function(){
        return(`my name is ${this.name}, my age is ${this.age}`)
    }
}

let user = new Details("rahul",25,"new delhi");
let user1=new Details("priya",23,"nipani");
let user2=new Details("sanika",21,"bimapurwadi");
// console.log(user);
console.log(user.description());
// console.log(user1);
console.log(user1.description());
// console.log(user2);
console.log(user2.description());