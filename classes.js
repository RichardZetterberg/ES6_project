class Task{
    constructor(title = Task.getDefaultTask()){
        this.title = title;
        this._done = false;
        console.log('Создание задачи');
        Task.count +=1;
    }

    get done(){
        return (this._done===true) ? 'Выполнена' : 'Не выполнена'; 
    }

    set done(value){
        if (value !== undefined && typeof value === 'boolean'){
            return this._done = value;
        }
        else{
            console.error('Error! Something wrong!!!');
        }
    }

    complete(){
        this.done = 1;
        console.log(`Задача ${this.title} не выполнена`);
    }

    static getDefaultTask(){
        return 'Неизвестная задача';
    } 
}

//Task.count = 0;

let task = new Task('Nothing to do');
console.log(task.done);
task.complete();
console.log(task.done);

/*let task2 = new Task('Another error');
let task3 = new Task();

console.log(task.title);
console.log(task2.title);
console.log(task3.title);

task.complete(); 
task2.complete();
task3.complete(); 

console.log(Task.count);*/