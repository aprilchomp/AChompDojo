// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function returns(){
    var arr = []
    for(var i = 1; i <= 255; i++){
        arr.push(i);
    }
    return arr;
}
console.log(returns());

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function getEven(){
    var sum = 0;
    for(var i = 1; i <= 1000; i++){
        if(i%2 == 0){
            sum = i + sum;
        }
    }
    return sum;
}
console.log(getEven());

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function getOdd(){
    var sum = 0;
    for(var i = 1; i <= 5000; i++){
        if(i%2 == 1){
            sum = i + sum;
        }
    }
    return sum;
}
console.log(getOdd());

// 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterate(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(iterate([9,9,9]));

// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function maxNum(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxNum([22,6,3,1,64]));

// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function average(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    sum = sum / arr.length;
    return sum;
}
console.log(average([1,3,5,7,20]));

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function returnOdd(){
    var x = [];
    for(var i = 0; i < 50; i++){
        if(i%2 == 1){
            x.push(i);
        }
    }
    return x;
}
console.log(returnOdd());

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(x,y){
    counter = 0;
    for(i = 0; i < x.length; i++){
        if(x[i] > y){
            counter += 1;
        }
    }
    return counter;
}
greaterThanY([1,0,3,4],1);
console.log(counter);

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(x){
    for(i = 0; i < x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
}
console.log(square([1,5,10,-2]));

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function replace(x){
    for(i = 0; i < x.length; i++){
        if(x[i] < 0){
            x[i] = 0;
        }
    }
    return x;
}
console.log(replace([1,-3,10,-2]));

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(x){
    max = x[0];
    min = x[0];
    sum = 0;
    second = [];
    for(i = 0; i < x.length; i++){
        if(max < x[i]){
            max = x[i];
        }
        if(min > x[i]){
            min = x[i];
        }
        sum = sum + x[i];
    }
    second.push(max);
    second.push(min);
    sum = sum / x.length;
    second.push(sum);
    return second;
}
console.log(maxMinAvg([1,5,10,-2]));

// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(x){
    if(x.length >= 2){
        first = x[0];
        last = x[x.length - 1];
        x[0] = last;
        x[x.length - 1] = first;
    }
    return x;
}
console.log(swap([1,5,10,-2]));

// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. 
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function replace(x){
    for(i = 0; i < x.length; i++){
        if(x[i] < 0){
            x[i] = 'Dojo';
        }
    }
    return x;
}
console.log(replace([-1,-3,2]));

