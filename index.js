let readlineSync = require("readline-sync");
let que = readlineSync.question("what's your name")
let age = readlineSync.question("Tell about your age")
let score = 0

console.log(`Name: ${que} \n Age:${age}`)
console.log("Let's begin the yoga Quiz")

let questions = [{
  quesone: `which is the most famous yoga pose to increase height \n a:tadasana \n b:vrikshasana \n c:parvatasana \n d:chakrasana`,
  ansone: "a"
},
{
  quesone: "which is suitable for blood circulation to brain\n a:backbend \n b:forwardbend \n c:headstand \n d:both a and c",
  ansone: "d"
},
{
  quesone: "which is the easiest way to get into kundlini \n a:gymnastics \n b:yogasanas \n c:pranayams \n d:exercises",
  ansone: "c"
},
{
  quesone: "Easiest way to get rid to fatness \n a:by kapalbhati \n b:sun salutaion \n c:exersices \n d:both a snd b",
  ansone: "d"
},
{
  quesone: "how to remove thigh fat \n a:kapalbhati \n b:bhastrika \n c:chair pose \n d:meditation",
  ansone: "c"
},
]

for (let i = 0; i < questions.length; i++) {
  function quiz(ques, ans) {
    let question = readlineSync.question(ques)
    if (question == ans) {
      console.log("right")
      score = score + 1
    } else if (question == !ans) {
      console.log("you dont know me")
      score = score - 1
    }
  }
}

quiz(questions[0].quesone, questions[0].ansone)
quiz(questions[1].quesone, questions[1].ansone)
quiz(questions[2].quesone, questions[2].ansone)
quiz(questions[3].quesone, questions[3].ansone)

console.log(`Your!!Total score: ${score}`)
if (score === 4) {
  console.log("you have a knowledge about yoga ,,Start it today")
} else {
  console.log("try again!!")
}