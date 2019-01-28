//сравнение 2 массивов - вложенные циклы

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

//
// сравнение 2 массивов
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// for-if-else-break;
for(let rapperArrayIndex = 0; rapperArrayIndex< rapperArray.length;rapperArrayIndex++){
  if(rapperArray[rapperArrayIndex] === "Notorious B.I.G."){
    console.log(rapperArray[rapperArrayIndex]);
    break;
  } else {
    console.log(rapperArray[rapperArrayIndex]);
  }

}
console.log("And if you don't know, now you know.");


// 2 массива, сравнение, преоьразование из массива в строку

const input = 'A whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for(let i=0;i<input.length;i++){
	console.log('i is '+ i);
  for(let j=0;j<vowels.length;j++){
  	console.log('j is '+ j);
    if(input[i]===vowels[j]){
      if(vowels[j]==='e' || vowels[j]==='u')
      resultArray.push(vowels[j]);
      resultArray.push(vowels[j]);
    }
  }
}
console.log(resultArray);
let res = resultArray.join('').toUpperCase();
console.log(res);
