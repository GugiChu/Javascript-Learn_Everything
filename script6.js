// Question 1 
// function bmi(weight,height){
//     return weight / (height*height)
// }
// console.log(bmi(+(prompt("Enter your weight ")),+(prompt("Enter Your Height")))) 

// Question 2
// let greet = function(name = "Gaurav"){
//     return name
// };
// console.log(greet());

// Question 3
// function sumall(...nums){
// let add = 0
// nums.forEach((num) => {
//  add = add+num 
// });
// console.log(add);
// }
// sumall(1,2,3,4,5)

// Question 4
// function x(){
// let a = 10
//     return function y(){
//         let b = 10
//         return function z(){
//             let add = a + b
//             console.log(add)
//         }
//     }
// }
// // teen bar callback karne padega
// x()()()

// Question 5
// (function a(){
//     return function b(){
//         console.log("Suiiiii")
//     }
// }

// )()();

// Question 6
// function even(...val){
//     let a = [...val]
// a.forEach((element)=>{
//         if(element%2===0){
// console.log(element)
//     }
// })}
// even(1,2,3,4,5,6,7,8,9,10,11,12,13,14)

// Question 7 
// let price = prompt("enter your product price")
// function a(val){
//     let tax = val*(18/100) + val
//     console.log(tax)
// }
// a(+(prompt("Enter product price")))

// Question 8
// (function wlcm(){
//     console.log("Welcome User!!")
// }
// )();

// Question 9
// function a(val){
//     return function amt(){
//         let d = prompt("Enter the discount %")
//         let disallprc = val - (val*(d/100)) 
//         console.log(disallprc)
//     }
// }
// a(prompt("enter the product price:"))()

// Question 10
// function a(str) {
//     if (isNaN(Number(str))) {
//         let b = str
//         return b.toUpperCase()
//     }
//     return NaN
// }
// console.log(a(prompt("Enter Your String")))

