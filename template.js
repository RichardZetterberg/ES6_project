function greet(name){
    console.log(`Hello ${name}`.toUpperCase());
}

function createEmail(to, from, subject, message){
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

createEmail('John', 'Jane', 'Hello', 'Hello John');

function add(x,y){
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add('3','7');

let name = 'Bill';
let surName = ' Jackson';
console.log(upper`Hello dear ${name} ${surName}`);

function upper(literals, value1, value2){
    return literals[0] + literals[1] + value1.toUpperCase() + value2.toUpperCase();
}