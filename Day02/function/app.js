// function
// way 1
function sum(a,b){
    // console.log("this is my function");
    let sum = a+b;
    return(`my sum is ${sum}`);
}
// console.log(sum(2,4));

// way2 => first class function

let ans = function print(){
    return(" i am print ka function")
} 
// console.log(print());
console.log(ans());