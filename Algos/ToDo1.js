// Practice 

//////////////////////////////////////////

// function myFunction(){
//     console.log("This is my function")
// }
// myFunction();

//////////////////////////////////////////////

// var name = "April";

// var role = "Student";
// // concat string with '+' ',' ' `${} ${}` '
// console.log(name + role);
// console.log(name, role);
// console.log(`${name} ${role}`);

////////////////////////////////////////////

// var name = "April";

// var role = "Student";

// var sentence = "This is a sentence that has multiple words."
// // // split -- puts strings into arrays and can take in parameters
// // console.log(name.split());
// // console.log(name.split('p'));
// // console.log(sentence.split(' ')); //split on a space ' ' 

// // join -- opposite of split 
// let sent_arr = sentence.split(' ');
// sent_arr.length
// console.log(sent_arr);
// console.log(sent_arr.join(' ')); // join can take parameter -- (' ') will remove the commas

///////////////////////////////////////////

// let student_arr = ['me', 'you', 'us', 'them', 'they']
// // push and pop (end of array)
// // shift and unshift (beginning of array)
// student_arr.push("together");
// console.log(student_arr);

/////////////////////////////////////////////

// // objects - key value pairs, dictionary 
// var truck = {
//     'make': 'Toyota',
//     'model': 'Tacoma',
//     'color': 'red',
//     'year': '2020',
// }
// console.log(truck);
// // change a value 
// truck['color'] = 'blue';
// console.log(truck);

//////////////////////////////////////////////
// to loop through objects use 'for (key) in (dictionary)' loop
// var truck = {
//     'make': 'Toyota',
//     'model': 'Tacoma',
//     'color': 'red',
//     'year': '2020',
// }

// for(thing in truck){
//     console.log(thing);
//     console.log(thing, truck[thing]); //prints both values 
// } 

// // for in loops with arrays 
// let student_arr = ['me', 'you', 'us', 'them', 'they']

// for(student in student_arr){
//     console.log(student); // loops through position in array
//     console.log(student_arr[student]); // loops through value of index
// }

// // for loop
// let student_arr = ['me', 'you', 'us', 'them', 'they']

// for(let i = 0; i < student_arr.length; i++){
//     console.log(student_arr[i]);
// }

// // while loop 
// let j = 10 
// while(j > 0){
//     console.log(j);
//     j--;
// }

// remove value at given index and return new array
// function remove(arr, ind){
//     newer = [];
//     for(i = 0; i < arr.length; i++){
//         if(i != ind){
//             newer.push(arr[i]);
//         }
//     }
//     return newer;
// }
// console.log(remove([1, 2, 3], 1))

////////////////////////////////////////////////

// ASSIGNMENT 

// 1. Push Front: Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

// function newArr(arr, item){
//     arr.unshift(item);
//     return arr;
// }
// console.log(newArr([2, 3, 4], 1))

// 2. Pop Front: Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// function popFront(arr) {
//     let temp = arr[arr.length-1];
//     arr[arr.length-1] = arr[0];
//     arr[0] = temp;
//     return arr.pop()
// }
// console.log(popFront([1, 2, 3]))

// 3. Insert At: Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// function insertAt(arr, ind, val) {
//     arr[arr.length] = val;
//     for (var x = arr.length-1; x > ind; x--) {
//         var temp = arr[x];
//         arr[x] = arr[x-1];
//         arr[x-1] = temp;
//     }
//     return arr;
// }
// console.log(insertAt([1, 2, 3, 4], 1, 6))

// 4. Remove At: Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// function removeAt(arr, ind){
//     let temp = arr[arr.length-1];
//     arr[arr.length-1] = arr[ind];
//     arr[ind] = temp;
//     return arr.pop()
// }
// console.log(removeAt([2,3,4,5], 1))

// 5. Swap Pairs: Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.







// 6. Remove Duplicates: Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods. -- Second: Solve this without using any nested loops.