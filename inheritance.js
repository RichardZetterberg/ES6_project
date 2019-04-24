class Task{
    constructor(title){
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Создание класса');
    }

    complete(){
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    static getDefaultTitle(){
        return 'Задача';
    }
}

Task.count = 0;

class SubTask extends Task{
    constructor(title, parent){
        super(title);
        this.parent = parent;
        console.log('Создание подкласса');
    }

    complete(){
        //this.done = true;
        super.complete();
        console.log(`Подзадача "${this.title}" выполнена`);
    }
}

let task = new Task('Something to do');
let subtask = new SubTask('Sub_smth to do', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

//console.log(subtask instanceof SubTask);
//console.log(subtask instanceof Task);