
const typing_ground = document.querySelector('#Typing');
const btn = document.querySelector('#btn');
const showScore = document.querySelector('#showScore');
const Sentence = document.querySelector('#Sentence');

let startTime,endTime,TotalTimeTaken;

const sentences = ['CodesOnBytes typing test 1',
     'CodesOnBytes typing test 2',
     'CodesOnBytes typing test 3'
     
]
const calculateSpeedTime = (time_taken) =>{
    let totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        showScore.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        showScore.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}






const endTypingTest = () =>{
    btn.innerText = 'Start';

    let date = new Date();
    endTime = date.getTime();
    TotalTimeTaken = (endTime-startTime)/1000;
    console.log(TotalTimeTaken);

    calculateSpeedTime(TotalTimeTaken);
    Sentence.innerHTML = "";
    typing_ground.value = "";

}

const startTyping = () =>{
let randomNumber = Math.floor(Math.random() * sentences.length);
//console.log(randomNumber);
Sentence.innerHTML = sentences[randomNumber];

let date = new Date();
startTime = date.getTime();

btn.innerText = 'Done';

}


btn.addEventListener('click',() =>{
    switch(btn.innerText.toLowerCase()){
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

            case "done":
                typing_ground.setAttribute('disabled',true);
                endTypingTest();
                break;

    }

})

