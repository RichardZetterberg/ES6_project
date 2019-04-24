/*let person = {
    firstname: "Bill",
    lastname: "Gates"
}*/

/*let firstname = person.firstName;
let lastname = person.lastName;*/

/*let {firstname: first, lastname: last, age = 18} = {firstname: "Bill", lastname: "Gates"};
console.log(first, last, age);*/

let user = {
    firstname: "Bill",
    lastname: "Gates",
    social: {
        telegram: "B_G",
        twitter: "BillG"
    }
}

let {firstname: first, lastname: last, social:{telegram: telega}, age = 25} = user;
console.log(first, last, telega, age);

function post(url, {data, cache}){
    console.log(data, cache);
}

let result = post('api/users/data', {data:user, cache:false});

function getUserInfo(){
    return {
        firstname: "Bill",
        lastname: "Gates",
        social: {
            telegram: "B_G",
            twitter: "BillG"
        }
    }
}

let {firstname, lastname, social:{twitter} } = getUserInfo();
console.log(firstname, lastname, twitter);