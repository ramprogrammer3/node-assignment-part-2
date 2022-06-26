

const events = require('events');
const emitter = new events.EventEmitter();
emitter.on("customeEvent", ()=>{
    console.log("custom event has been trigger ")
})

emitter.emit("customeEvent")




const events = require('events');
const emitter = new events.EventEmitter();
emitter.emit("customeEvent")
emitter.on("customeEvent", ()=>{
    console.log("custom event has been trigger ")
})


let questions = [
    "what is your name ?",
    "Where are you from ?",
    "Which programming language is your favourite ?"
]
let count = 0;
let answer = []
function askQuestion(i = count){
    console.log(questions[i])
}
askQuestion();
process.stdin.on("data",(data)=>{
    answer.push(data);
    count++;
    if(questions.length == answer.length){
        console.log(" ")
        console.log("Answer ")
        answer.map((item,i)=>{
            console.log(`${questions[i]} : ${item}`)
        })
        process.exit();
    }
    askQuestion();
})