/*function add(x, y){
    return x+y;
}*/

let add = (x,y)=>x+y;
let square = x=>x*x;
let giveMeAnswer = ()=>42;
let log = ()=>'Logging';
let multiply = (x,y)=>{
    let result = x*y;
    return result;
};
let getPerson = ()=>({name: 'John'});

(()=>console.log("IIFE"))()

/*console.log(add(5,2));
console.log(square(3));
console.log(giveMeAnswer());
console.log(log());
console.log(multiply(3,6));
console.log(getPerson());*/

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
numbers.forEach(num => sum += num);
let sqr = numbers.map(num => num*num);

let person = {
    name: "Bob",
    greet: function (){
        setTimeout(()=>{
            console.log("Hello," + this.name);
            console.log(this);
        },2000);
    }
}

person.greet();

console.log(sum);
console.log(sqr);