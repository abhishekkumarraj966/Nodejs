// Fundamentals of js
// arrays and object
// function return
// async js coding

// Array
// foreach, map, filter, find, indexOf,

var array = [1, 2, 3, 4, 5, 6];

// Foreach

// array.forEach(function(array){
//     console.log(array + " Hello");
// })

// Map

// array.map(function(array){
//     var sum=10;
//     console.log(array + sum);

// })

// Filter

// const test=array.filter(function(array){
//     if(array >3){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(test);

// find

//  const text= array.find(function(array){
//     if(array===6)
//     {
//         return array;
//     }
// })

// console.log(text);

// indexOf

// let index = array.indexOf(7);

// if (index !== -1) {
//     console.log("hello");
// } else {
//     console.log("by");
// }

// Object

// var obj=  {
//     name:"Raj",
//     age: "12",
//     roll: '14780',

// }

// obj.age=50;

// console.table(obj.name, obj.age, obj.roll);

// function abc (){
//     return 10;
// }

// abc();

// async JS Coding

// var blop= await fetch(`https://randomuser.me/api/`);
// var res=await blop.json();
// console.log(res);

// Line by line code chale isey khate hai  synchronus

//  jo bhi code asyncec neture ka ho usey side stack mein bhej do and agle code ko chlalao jo bhi sync nature ka ho jab bhi saare syn code chal jaaye tab check kro ki async code complete huaa ye nahi and agre wo complete hua ho to usey main stack mein laao and chala do

async function fetchRandomUser() {
  var blob = await fetch(`https://randomuser.me/api/`);
  var res = await blob.json();
  console.log(res.results[0].name.last);
}
 fetchRandomUser();

