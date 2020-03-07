// ALGORITHIMS 4
// 1. Given an array and a value Y, count and print the number of array values greater than Y.

function countValues(arr,y){
   count = 0;
   for(var i=0; i<arr.length; i++){
     if(arr[i] > y){
       count++;
     }
   }
   return count;
 }
console.log(countValues([2,3,4,5],3));

// 2. Given an array, print the max, min and average values for that array.

function average(arr){
  sum = 0;
  for(var i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }
  sum = sum / arr.length;
  return sum;
}

function maxNum(arr){
  max = arr[0];
  for(var i=0; i < arr.length; i++){
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}

function minNum(arr){
  min = arr[0];
  for(var i=0; i>arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
  }
  return min;
}

console.log(average([2,5,8]));
console.log(maxNum([2,5,8]));
console.log(minNum([2,5,8]));

// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’. 
// For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function newArray(arr){
  for(var i=0; i<arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo';
    }
  }
  return arr;
}
console.log(newArray([2,-6,3,-6]));

// 4. Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). 
// For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
// ??????????????????????????/