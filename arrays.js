let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

function leng(){
  console.log('Array: ' + secretMessage);
  console.log('length: ' + secretMessage.length);
}
leng();


//1- remove 
secretMessage.pop();
leng();

//2 - add
secretMessage.push('to', 'Program');
leng();

//3 -change
secretMessage[7]='right';
console.log(secretMessage[7]);

//4 remove first string

secretMessage.shift();
leng();


//5 add the string to the beginning

secretMessage.unshift('Programming');
leng();



//6 Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
secretMessage.splice(5, 5, 'know');
leng();


//7

console.log(secretMessage.join(' '));





