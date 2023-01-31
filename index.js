// 1.
// function maxOfTwoNumbers(x, y) {
//   if (x >= y) {
//     return x;
//   } else {
//     return y;
//   }

// or more "elegantly" using the fantastic ternary expression!
// return  x >= y ? x : y;
//}

// console.log(maxOfTwoNumbers(3, 9));

//-----------------------------------------------------

// 2. Compare Three Integers
// let maxOfThree = function(x, y, z) {
//   if (x > y) {
//     if (x > z) {
//       return x;
//     }
//     else {
//       return z;
//     }
//   } else if (y > z) {
//     return y;
//   }
//   else {
//     return z;
//   }
// }

// console.log(maxOfThree(9, 6, 19));

//-----------------------------------------------------

//3. Is it a vowel?
// function isCharAVowel(char) {
//   if (char === 'a' ||
//     char === 'e' ||
//     char === 'i' ||
//     char === 'o' ||
//     char === 'u') {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(isCharAVowel('u'));

//-----------------------------------------------------

//4.The Sum Of The Array
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// function sumArray(array) {
//   console.log(array);
//   array.reduce(function(total, num) {
//     console.log(total + num);
//   },
//   );
// }

// let sumArray = function(array) {
//   console.log(array);
//   array.reduce(function(total, amount) {
//     console.log(total + amount);
//   })
// }

// sumArray([2,3])
// sumArray([2, 3, 5]);
// console.log(sumArray([1, 2, 3]));

//-----------------------------------------------------

//5.Multiplication Of The Array
function multiplyArray(array) {
  console.log(array);
  // let value = 1;
  array.reduce(function(total, digit){
    console.log('total: ', total);
    console.log('array: ', digit);
    console.log ('mult' , total *= digit);}
  );
}

console.log(multiplyArray([3, 2]));
//-----------------------------------------------------

//6.

//-----------------------------------------------------

//7.Reverse The Word!
// function reverseString(word) {
//   let char = word.split('');
//   char.reverse();
//   let newWord = char.toString();
//   newWord = newWord.replaceAll(',', '');
//   console.log(newWord);
// }

// reverseString('rockstar')

//-----------------------------------------------------

//8.
// let longestStringInArray = function(arg) {
//   for (i = 0; i < arg.length; i++) {
//     return arg[i].length;
//   }
// }

// console.log(longestStringInArray(['one', 'two', 'three']));

//-----------------------------------------------------

//9.
// function stringsLongerThan(array, index) {
//   console.log(array.length);
//   console.log(index);

//   array.forEach(function(row) {
//     console.log(row);
//     for (let i = 0, a = row.length, aNew = []; i < a; i++) {
//       if (aNew.indexOf(row[i]) < 0) {
//         aNew.push(row[i]);
//         console.log(aNew);
//       }
//       else {
//         console.log('')
//       }
//     }
//   });

// }
// stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)