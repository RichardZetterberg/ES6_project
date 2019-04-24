function applyForVisa(documents, resolve, reject){
    console.log('Обработка заявления...');
    setTimeout(function(){
        Math.random() > .5 ? resolve({}) : reject('В визе отказано');
       // let visa = {};
       // resolve(visa);
    }, 2000);
}

applyForVisa({}, function(visa){
    console.info('Виза получена');
},
function (reason){
    console.error(reason);
}
);