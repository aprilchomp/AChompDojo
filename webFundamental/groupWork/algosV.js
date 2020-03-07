// More Arrays!

// shift array

// Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  
// For example moveForward( [1,2,3]) should return [2,3,0].
// NOTE: Do this "In Place"
function shiftArray(arr) {
    // loop through array
    for (var i = 0; i < arr.length - 1; i++) {
        // "replace" index values
        //  arr[i] => 1
        //  arr[i+1] => 2
        //      i
        // [2,3,0]
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    // assign 0 to the last element
    return arr;
}
var shiftTest = [1, 2, 3]; // should return [2,3,0]

// reverse array
// Given an array, return an array with values in a reversed order.  
// For example, returnReversed([1,2,3]) should return [3,2,1].
function reverseArray(arr) {
    // loop through HALF of the array
    for (var i = 0; i < arr.length / 2; i++) { // i:2, arr[i]:3, temp:2
        // SWAP across the mid point

        //      i   
        // [1,2,3,4,5]
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}


// Given array, and indices start and end, remove vals in that index range.  
// For example, removeVals([20,30,40,50,60,70,80,90],2,4) should return [20,30,70].
function removeVals(arr, start, end) {
    //        i
    //        j  
    // [20,30,40,80,90,90,90,90]
    for (var i = end; i >= start; i--) {
        // move arr[i] to the end of the array
        for (var j = i; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
    }
    //        i
    //        j
    // [20,30,70,80,90,90,90,90]
    arr.length = arr.length - (end - start + 1);
    // shorten array by the number of elements removed
    return arr;
}
console.log(removeVals([20, 30, 40, 50, 60, 70, 80, 90], 2, 4));


function removeVals(arr, start, end) { // start: 2, end: 4
    //  0  1  2  3  4  5
    // [20,30,40,50,60,70]
    var newArr = [];
    // loop array
    for (var i = 0; i < arr.length; i++) {
        // if i greater >= start AND i <= end
        // OR: ||
        // AND: &&
        if (i < start || i > end) {
            // DO push to newArr
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


// double up array values

// Create a function that changes a given array to list each original element twice, retaining original order.  
// Have the function return the new array.  
// For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function repeatTwice(arr) {
    // loop array (from end)
    for(var i=arr.length-1; i>=0; i--) {
        // copy value of arr[i] TO arr[i*2] AND arr[i*2+1]
        arr[i*2] = arr[i];
        arr[i*2+1] = arr[i];
    }
    //  0  1  2  3  4  5  
    //  i
    // [20,30,40]
    // [20,20,30,30,40,40]
    return arr;
}
var testArray = [4, "Ulysses", 42, false];
console.log(repeatTwice(testArray));