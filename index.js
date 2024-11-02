
// String Method Tasks

// 1. Capitalize the first letter of a given string.
// Example: "hello" → "Hello"
// let str = "hello";
// let capitalized = str[0].toUpperCase() + str.slice(1);
// console.log(capitalized);




// 2. Check if a string contains a specific substring.
// Example: "Hello World", substring "World" → true

// let str="Hello world";
// console.log(str.includes("Hello"))



// 3. Repeat a given string 'n' times.
// Example: "abc", 3 → "abcabcabc"

// let str="abc";
// let str1=str.repeat(3)
// console.log(str1);




// 4. Replace all occurrences of a specific word in a string with another word.
// Example: "I love apples", replace "apples" with "oranges" → "I love oranges"

// let str="I love apples" 
// let str1=str.replace("apple","orange")
// console.log(str1);





// 5. Count the number of words in a sentence.
// Example: "Hello World!" → 2

// let str="Hello world"
// let wordscount=str.trim().split(" ").length
// console.log(wordscount);








// 6. Reverse the characters in a given string.
// Example: "hello" → "olleh"

// let str="hello";
// let str1="";
// for(let i=str.length-1;i>=0;i--){
//    str1+=str[i]
 
// }
// console.log(str1);



// 7. Extract the text between two characters.
// Example: "Hello [World]", characters "[" and "]" → "World"

// let str = "Merhaba [Dünya]";
// let startChar = "[";
// let endChar = "]";

// let extracted = str.substring(str.indexOf(startChar) + 1, str.indexOf(endChar));
// console.log(extracted);








// 8. Convert a string to snake_case format.
// Example: "Hello World" → "hello_world"


// let str = "Hello World";
// let snakeCase = str.toLowerCase().replace(/\s+/g, "_");
// console.log(snakeCase);






// 9. Remove leading, trailing, and extra spaces in a string.
// Example: "   Hello    World   " → "Hello World"

// let str1 = "   Hello    World   ";
// let cleaned = str.trim().replace(/\s+/g, " ");
// console.log(cleaned);

// 10. Identify the longest word in a given sentence.
// Example: "I love programming" → "programming"

// let sentence = "I  love programming ";
// let words = sentence.split(" ");
// let longestWord = "";

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//     }
// }

// console.log(longestWord);








// Number Method Tasks

// 1. Convert a string to a number and handle invalid cases.
// Example: "123" → 123, "abc" → NaN
//  let num=123;
//  let str=num.toString();
 
//  console.log(typeof str);




// 2. Round a decimal number to two decimal places.
// Example: 3.14159 → 3.14

// let num=3.14159
// let num1=num.toFixed(2);
// console.log(num1);






// 3. Write a function that returns the square root of a given number.
// Example: 5 → 25


// function x(y){
//    console.log(y*y);
// }

// x(5);





// 4. Write a function that converts a string to a floating-point number.
// Example: "2.454" → 2.454

// function x(){
//     let str = "2.454";
// let result = parseFloat(str);
// console.log(result);
// }



// 5. Parse a string to an integer
// Example: "55" → 55


// function x(){
//     let str = "55";
// let result = parseInt(str);
// console.log(result);
// }

// x();

// 6. Write a function that checks if a given value is NaN (Not-a-Number)
// Example: "ereferf" → true, "23" → false

function myIsNaN(value) {
    return Number(value) !== Number(value);
}
    console.log(myIsNaN("dsss"));
    console.log(myIsNaN("23"));


// 7. Calculate the sum of the digits of a given number.
// Example: 123 → 6

// 8. Find the number of digits in a given number.
// Example: 1234 → 4

// 9. Find the sum of array items
// Example: [1, 3, "5"] → 9

// 10. Write a function that rounds a given decimal number to the nearest integer.
// Example: 3.12 → 3