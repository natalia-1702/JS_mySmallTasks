/* This script contains various methods to iterate over arrays */
/* -------------------------for each---------------------------------------*/
console.time('START');//start

//1- Итератор forEach - стрелочная функция
console.log('one:');
const a = [1, 2, 3, 4];

a.forEach(groceryItem => console.log(groceryItem));
//2-  Итератор forEach - классическая функция
console.log('two:');

const b = [5, 6, 7, 8];
b.forEach(function(i){
  console.log(i);
});

//3-  Итератор forEach - предварительное объявление функции
console.log('three:');
const c = [9, 10, 11, 12];
function d(i){
  console.log(i);
}
c.forEach(d);
//
console.timeEnd('START');//end

// 4 - если хотим менять исходный массив , то в функции обратного вызова нужно 2 параметра

var arr = [1, 2, 3, 4];

arr.forEach(function(v, i) {
   arr[i] = "foo" + v;
});

console.log( arr );

/* -------------------------map возвращает новый массив---------------------------------------*/
const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

/* -------------------------filter возвращает новый массив---------------------------------------*/
//1
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(num => {
  return num<250;
});
console.log(smallNumbers);


//2
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(function(word){
  return word.length>7;
});
console.log(longFavoriteWords);


/* -------------------------findIndex возвращает индекс элемента, удовлетворяющего условию---------------------------------------*/

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(ani => {
  return ani === 'elephant';
});
console.log(foundAnimal);


//

const startsWithS = animals.findIndex( start => {
  //return start[0] === 's'; //взаимозаменяемо с текстои ниже
  return start.charAt(0);
});

console.log(startsWithS);



/* -------------------------reduce ---------------------------------------*/

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

/* -------------------------filter ---------------------------------------*/
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));

const interestingWords = words.filter((w)=>{
  return w.length>5;
});
console.log(interestingWords);
console.log(interestingWords.every((word) => {return word.length>5 } ));

/* -------------------------summary ---------------------------------------*/

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);



/* --------------- SUMMARY------------------ */

// Arrays
const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = ['Nat', 'Nik', 'Kate'];

//1- map - number
const testFunc1 = (numb) => {
  return numb*3;
};
const res1 = testArr1.map(testFunc1);
console.log(res1);

//2-map - string
const testFunc2 = (word) => {
  return word[0];
};
const res2 = testArr2.map(testFunc2);
console.log(res2);

//3-  filter - number
const testFunc3 = (numb) => {
  return numb<=3;
};
const res3 = testArr1.filter(testFunc3);
console.log(res3);

//4- filter - string
const testFunc4 = (word) => {
  return word[0] != 'N';
};
const res4 = testArr2.filter(testFunc4);
console.log(res4);

// 5 - findIndex - numb
const testFunc5 = (numb) => {
  return numb >4;
};
const res5 = testArr1.findIndex(testFunc5);
console.log(res5);
//console.log(testArr1[res5]);

// 6 - findIndex - string
const testFunc6 = (word) => {
  return word[1] != 'a';
};
const res6 = testArr2.findIndex(testFunc6);
console.log(res6);

// 7 - reduce  - numb
console.log('7 - reduce  - numb:');
const testFunc7 = (accom, current) => {
  console.log(accom);
  console.log(current);
  return accom + current;
};
const res7 = testArr1.reduce(testFunc7);
console.log('res7'+res7);

// 8 - reduce  - string
const testFunc8 = (accom, current) => {
  console.log(accom);
  console.log(current);
  return accom[0] + current[0];
};
const res8 = testArr2.reduce(testFunc8);
console.log('res8: '+res8);

//9 - some
const testFunc9 = (numb) => {
  return numb>4;
};
const res9 = testArr1.some(testFunc9);
console.log(res9);

// 10- some
const testFunc10 = (word) => {
  return word[0] === 'K';
};
const res10 = testArr2.some(testFunc10);
console.log(res10);

// 11- every
const testFunc11 = (numb) => {
  return numb<6;
};
const res11 = testArr1.every(testFunc11);
console.log('res11: ' + res11);
//12- every
const testFunc12 = (word) => {
  return word[0] === 'K';
};
const res12 = testArr2.every(testFunc12);
console.log('res12: ' + res12);








/* -------------------- SUMMARY------------------ */
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
//1 - разделить 1 строку на подстроки
const storyWords = story.split(' ');
//console.log(storyWords);
//2 - количество слов в тексте
const leng = storyWords.length;
//3
const betterWords = storyWords.filter(word=>{
  if(unnecessaryWords.includes(word)===false){
    return word;
  }
});
//console.log(betterWords);


//4 - There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.
let extremely = 0;
let literally =0;
let actually =0;
storyWords.forEach(word => {
  if(word==='extremely'){
     extremely++;
     } else if(word==='literally') {
       literally++;
     } else if(word==='actually') {
       actually++;
     }
});
//5 - узнать количество предложений в параграфе
const storyCh = story.split('');
//console.log(storyCh);
let temp = 0;
storyCh.forEach(symbol=>{
  if(symbol==='.'||symbol==='!'){
    temp++;
  }
});
//6
const itemToConsole = (temp, extremely, literally, actually, leng, betterWords) => {
  console.log('betterWords in text: ' + betterWords.length);
  console.log('In the paragraph ' + temp+ ' sentences.');
  console.log('Word count "extremely": ' + extremely);
console.log('Word count "literally": ' + literally);
console.log('Word count "actually": ' + actually);
  console.log('In the paragraph ' + leng + ' words.');
}

itemToConsole(temp, extremely, literally, actually, leng, betterWords);

//7  log the betterWords array to the console as a single string
console.log(betterWords.join(' '));

//8_1 если слово встречается более, чем 1 раз - удалять его
const newArr = [];
storyWords.forEach(word=>{
  if(newArr.includes(word)===false){
    newArr.push(word);
  }
});
console.log(newArr.length);
const newArrJoin = newArr.join(' ');
console.log('Text without doublicates: ' + newArrJoin);

// 8_2 найти слово, которое встречается наибольшее кол-во раз

// 8_3 как-то слова заменить другими словами





//
