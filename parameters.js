function greet(greating, name){
    console.log(`${greating} ${name}`);
}

function greetEverybody(greating, name){
    if(greating!==undefined && name!==undefined){
        console.log(`${greating} ${name}`);
    }else if (greating===undefined && name!==undefined){
        console.log(`Hello ${name}`);
    }else if (greating!==undefined && name===undefined){
        console.log(`${greating} friend`);
    }else console.log(`Hello friend`);
}

function greetEvr(greating = 'Greeting to you', name = 'friend'){
    console.log(`${greating} ${name}`);
}

/*function sum(){
    var sum = 0;

    Array.prototype.forEach.call(arguments, function(value){
        sum += value;
    });

    console.log(sum);
}*/

/*function sum(...values){
    let sum = 0;
    values.forEach(function (values){
        sum+=values;
    });
    console.log(sum);
}*/

function sum(...values){
    console.log(values.reduce(function(preValue, currentValue){
        return preValue + currentValue;
    }));
}

greet('Greeting to you','Bill');
greet('Bill');

greetEverybody(undefined,'Bill');

greetEvr();

sum(1, 2, 3, 4, 7, 8, 9, 10);
