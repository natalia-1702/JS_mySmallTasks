/* -----------------switch case-----------------------*/

let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
       }



/* Magic Eight Ball ----------------switch case------------------------*/




let userName = 'Nat';
//
if(userName){
  console.log(`Hello, ${userName}!`);
} else {
  console.log('Hello!');
}

//
const userQuestion = 'Will I become a werewolf tonight?';
console.log(userQuestion);
const randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';
//
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
//
console.log(`The eight ball answered: ${eightBall}`);



/* Magic Eight Ball ----------------else if ------------------------*/


let userName = 'Nat';
//
if(userName){
  console.log(`Hello, ${userName}!`);
} else {
  console.log('Hello!');
}

//
const userQuestion = 'Will I become a werewolf tonight?';
console.log(userQuestion);
const randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';
//

if(randomNumber===0){
   eightBall = 'It is certain';
   }else if(randomNumber===1){
     eightBall = 'It is decidedly so';
   }else if(randomNumber===2){
     eightBall = 'Reply hazy try again';
   }else if(randomNumber===3){
     eightBall = 'Cannot predict now';
   }else if(randomNumber===4){
      eightBall = 'Do not count on it';
   }else if(randomNumber===5){
      eightBall = 'My sources say no';
   }else if(randomNumber===6){
       eightBall = 'Outlook not so good';
   }else if(randomNumber===7){
       eightBall = 'Signs point to yes';
            }

console.log(`The eight ball answered: ${eightBall}`);
