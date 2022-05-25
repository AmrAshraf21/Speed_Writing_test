
let spanLvl = document.querySelector('.message .lvl');
let spanSecond = document.querySelector('.message .seconds');

let choose = document.getElementsByClassName('choose')[0];
let selectBox = document.querySelector('#dif');
let selectedOption ;

let startButton = document.querySelector('.start');

let theWord = document.querySelector('.the-word');

let input = document.querySelector('.input');
let upComingWords = document.querySelector('.upcoming-words');

let timeLeftSpan = document.querySelector('.control .time span');
let gotScoreSpan = document.querySelector('.control .score .got');
let totalScoreSpan = document.querySelector('.control .score .total');
let finishMessage = document.querySelector('.finish')
let filterArray


const words=[
    "Hello",
    "Programming",
    "Code",
    "From",
    "Good",
    "Style",
    "Difference",
    "Congratulation",
    "Lion",
    "Language",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];
const lvls = {
'Easy':5,
'Normal':4,
'Hard':3,
}
input.onpaste = function(){
    return false
}

startButton.onclick = function(){
   
   
selectedOption = selectBox.value
spanLvl.innerHTML = selectedOption;
spanSecond.innerHTML = lvls[selectedOption];
this.remove();
 input.focus();
 
   
 filterArr(words)
 totalScoreSpan.innerHTML = filterArray.length+1;
}

function filterArr(words){
    if(selectedOption === "Easy"){
        filterArray = words.filter((e)=>{
            return e.length<=4 ? e : ""
        })  
    } 
    else if(selectedOption === "Normal"){
        filterArray = words.filter((e)=>{
            return e.length>4 && e.length<8 ? e : ""
        })  
    }else{
        filterArray = words.filter((e)=>{
            return e.length > 8 ? e : ''
        })
    }

    let randomWord = filterArray[Math.floor(Math.random() * filterArray.length)]
    let indexWord = filterArray.indexOf(randomWord)
    
    filterArray.splice(indexWord,1);
    theWord.innerHTML = randomWord;
    upComingWords.innerHTML = ""
    for(let i = 0 ; i < filterArray.length; i ++){
        let div = document.createElement('div');
        let txt = document.createTextNode(filterArray[i]);

        div.appendChild(txt);
        upComingWords.appendChild(div)

    }
    startPlay()
    //    filterArray.forEach(e => {
    //         console.log(e);
    //     });
}


/*************************Create the function that Start to paly******** */

function startPlay(){
    timeLeftSpan.innerHTML = spanSecond.innerHTML;
    let start = setInterval((e) => {
    timeLeftSpan.innerHTML--
    if(timeLeftSpan.innerHTML === '0'){
        clearInterval(start)
        if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
            gotScoreSpan.innerHTML++
            input.value = "";
    
            if(filterArray.length>0){
                filterArr(filterArray)
            }
    
    
            else{
                                let span = document.createElement('span');
                                span.className = 'good';
                                let spanText = document.createTextNode('Congrats,You Can Go to The next Level');
                                span.appendChild(spanText);
                                finishMessage.appendChild(span);
                
                                upComingWords.remove()
                            }
    
    
    
        }
        
        else{
            let span = document.createElement('span');
                        span.classList.add('bad');
                        let spanText = document.createTextNode('Game Over')
                        span.appendChild(spanText);
                        finishMessage.appendChild(span)
        }
    }
  
   
    
},1000);



}


// function genWord(){
//     filterArr(words)

//     let randomWord = filterArray[Math.floor(Math.random() * filterArray.length)]

// console.log(randomWord);
// }
// genWord()
// let arr = ['asfafas','asfasfas','asss','asasfa','aaa'];

// let newa = []

// let filter = arr.filter((e)=>{
//     return e.length>4 ? e : ''
// });

// newa.push(filter)
// console.log(...newa);
















// /**************************** 1- Create Array Of Words  ***************************** */
// const words =[
//     "Hello",
//     "Programming",
//     "Code",
//     "Javascript",
//     "Town",
//     "Country",
//     "Testing",
//     "Youtube",
//     "Linkedin",
//     "Twitter",
//     "Github",
//     "Leetcode",
//     "Internet",
//     "Python",
//     "Scala",
//     "Destructuring",
//     "Paradigm",
//     "Styling",
//     "Cascade",
//     "Documentation",
//     "Coding",
//     "Funny",
//     "Working",
//     "Dependencies",
//     "Task",
//     "Runner",
//     "Roles",
//     "Test",
//     "Rust",
//     "Playing"

// ];

// // Setting LEVELS *******************************

// const lvls = {
//     'Easy':7,
//     "Normal":4,
//     "Hard":2
// }
// //Default LEVEL ****************************

// //Create Variable ******************

// let startButton = document.querySelector('.start');

// let lvlNameSpan = document.querySelector('.message .lvl');
// let SecondsSpan = document.querySelector('.message .seconds')

// let theWord = document.querySelector('.the-word');

// let upComingWords = document.querySelector('.upcoming-words');

// let input = document.querySelector('.input');
// let timeLeftSpan = document.querySelector('.time span');

// let scoreGot = document.querySelector('.score .got');
// let scoreTotal = document.querySelector(".score .total");
// let finishMessage = document.querySelector(".finish");

// let choose = document.querySelector('.choose');
// let selectBox = document.querySelector('.choose #dif');
// let submitOption = document.querySelector('.submit');
// let selectedOption

// let defaultLevelName ;
// let defaultLevelSecond 



// input.onpaste = function(){
//     return false
// }

// startButton.onclick = function(e){
//     selectedOption = selectBox.value || 'Easy'
//    chooseDif() 

//     defaultLevelName = selectedOption;
//     defaultLevelSecond = lvls[selectedOption]
//     lvlNameSpan.innerHTML = defaultLevelName;
//     SecondsSpan.innerHTML = defaultLevelSecond;
//     timeLeftSpan.innerHTML = defaultLevelSecond

// scoreTotal.innerHTML = words.length;
//     this.remove();
// input.focus();
// genWord()
// //Generate Word Function ****************************

// };


// function genWord(){
//     //Get Random Word from array *****************

//     let randomWords =words[Math.floor(Math.random() * words.length)];

//     let wordIndex = words.indexOf(randomWords);

//     words.splice(wordIndex,1);

//         theWord.innerHTML = randomWords
//     //Show the Random word


//     upComingWords.innerHTML = "";

//     //Generate Words**********************

//     for(let i =0; i<words.length;i++){
//         let div = document.createElement('div');
//         let txt = document.createTextNode(words[i]);

//         div.appendChild(txt)
//             upComingWords.appendChild(div)
//                 }


//                 //Call Start Play Function****************
// startPlay()
// }

// function startPlay(){
// timeLeftSpan.innerHTML = defaultLevelSecond

// let start = setInterval(() => {
//     timeLeftSpan.innerHTML--;
//     if(timeLeftSpan.innerHTML === '0'){
//         clearInterval(start);



//         //compare Words

//         if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
//             //Empty input Filed
//             input.value = "";

//             scoreGot.innerHTML++;

//             if(words.length > 0){
//                 genWord();
//             }else{
//                 let span = document.createElement('span');
//                 span.className = 'good';
//                 let spanText = document.createTextNode('Congrats');
//                 span.appendChild(spanText);
//                 finishMessage.appendChild(span);

//                 upComingWords.remove()
//             }

//         }else{
//             let span = document.createElement('span');
//             span.classList.add('bad');
//             let spanText = document.createTextNode('Game Over')
//             span.appendChild(spanText);
//             finishMessage.appendChild(span)

//         }
//     }
// }, 1000);


// }


// function chooseDif(){
//     let filterArr;
//     if(selectedOption === 'Easy'){
//       filterArr=  words.filter((e)=>{
//             return e.length<=4 ? e : "";
//         })
       
        
//     } else if(selectedOption ==='Normal'){
//        filterArr= words.filter((e)=>{
//             return e.length>4 && e.length<8 ? e:""
//         })

//     }else{
//       filterArr= words.filter((e)=>{
//            return e.length>8 ? e: ""
//        })
//     }
// return filterArr
// }



