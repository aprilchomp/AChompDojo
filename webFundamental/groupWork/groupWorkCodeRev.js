/* 
FizzBuzz
Build a function that goes from 1 to a given number and prints the following...
    "Fizz" if the number is divisible by 3
    "Buzz" if the number is divisible by 5
    "FizzBuzz" if the number is divisible by both
    Otherwise print just the number itself
HINT:  COnsider using the modulus operator.
*/


fizzBuzz(25);





/*
Array: Reverse
Create a function that, given an array, returns an array with values in a reversed order.
For example, returnReversed([1, 2, 3, 4, 5, 6, 7]) should return [7, 6, 5, 4, 3, 2, 1].
HINT:  Consider using a temp variable.
*/

console.log(returnReversed([1, 2, 3, 4, 5, 6, 7]));





/*
Array: Doubled
Create a function that changes a given array to list each original element twice, retaining original order. Have the function return the new array. For example, repeatTwice(["Hello", 13, false, "World"]) should return
["Hello", "Hello", 13, 13, false, false, "World, World"].
Level 1 - You may create a new array.
Level 2 - Work in place, meaning do not create a new array.
*/

console.log(repeatTwice(["Hello", 13, false, "World"]));





// ADVANCED NINJAS
/* 
Array: Filter Range
Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range.
Given arr and values min and max, retain only the array values between min and max.
Work in -place: return the array you are given, with values in original order.
No built-in array functions.
*/


console.log(filterRange([3, 23, 5, 15, 7, 2, 12], 4, 15));





/* 
Array: Rotate
Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. 
‘Wrap - around’ any values that shift off array’s end to the other side, so that no data is lost.
Operate in-place: given([1, 2, 3], 1), change the array to[3, 1, 2].
Don’t use built-in functions.
    Second: allow negative shiftBy(shift L, not R).
    Third: minimize memory usage. With no new array, handle arrays / shiftBy s in the millions.
    Fourth: minimize the touches of each element.
*/


console.log(rotateArr([1, 2, 3, 4, 5], 1));