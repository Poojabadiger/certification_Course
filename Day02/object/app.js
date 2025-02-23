// object

// let person = {
//     Name : 'pooja',
//     age : 20,
//     favColor : 'pink'
// }

// console.log(person);
// console.log(person.Name);
// console.log(person.age);
// console.log(person[1]);
// console.log(person['age']);

// change properties in object
// update
// person.Name = 'pooja badiger';
// console.log(person);

// // adding new property
// person.gender = 'female';
// console.log(person);

// // delete property
// delete person.favColor;
// console.log(person);

// advanced object
let person = {
    Name : 'pooja',
    age : 20,
    favColor : 'pink',
    fun : function print(){
        return (` my name is ${this.Name} and my age is ${this.age}`);
    },
    newobj :{
        gender : "female",
        address : "urban square hotel",
    }
}
// console.log(person.print());
// console.log(person.fun());
console.log(person.newobj.address);
