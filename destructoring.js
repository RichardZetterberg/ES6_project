//let languages = ['JavaScript', 'PHP', 'Ruby', 'Python'];

/*let js = languages[0];
let php = languages[1];
let rb = languages[2];
let ptn = languages[3];*/

//let js, php, rb, ptn;

/*let [js, php, rb, ptn] = languages;
console.log(js, php, rb, ptn);*/

/*let scores = [3, 4, 5, 6, 7, 8, 9, 10];
let [low, ...rest] = scores;
console.log(low, rest);*/

function computeScore([low,mid]){
    console.log([low,mid]);
}

computeScore([3, 5]);

function getScores(){
    return [3,4,5];
}
let scores = getScores();
console.log(scores);
let [low, mid, high] = getScores();
console.log(low,mid,high);

let yes = "Yes";
let no = "No";

[yes, no] = [no, yes];
console.log("Yes is ", yes);
console.log("No is ", no);