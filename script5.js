// Question 1 
// for(let i = 1 ; i < 11 ; i++){
//     console.log(i)
// }

// Question 2 
// for (let i = 1 ; i < 21 ; i++ ){
//     if (i%2===0){
//     console.log(i)}
// }

// Question 3
// let str = prompt("enter your name")
// let rev = ""
// for(let i = str.length - 1; i >= 0; i--) {
//     rev += str[i]
// }
// console.log(rev)

// Question 4
// let arr = [1,2,3,4,5]
// let sum =arr.reduce((val,a)=>{
//     return val = val+a
// },0)
// console.log(sum)

// Question 5 
// for(let char of "Gaurav"){
//     console.log(char)
// }

// Question 6
// let student = {
//     name : "Gaurav",
//     age : 16,
//     isEnrolled : true
// }
// for(let key in student){
//     console.log(key ,":" , student[key])
// }

// Question 7
// let j = Number(prompt("Enter the ending number "))
// let skipnum = Number(prompt("Enter the number from 1 to ending num to skip"))
// for(let i = 0 ; i <= j ; i++){
//     if (i === skipnum ) continue;
//     console.log(i)
// }
// continue / break

// Question 8
// let userinput = +(prompt("enter a number"))
// let i = 0
// while(i <= userinput){
//     console.log("Matched")
//     i++
// }

// Question 9
// for(let i = 1 ; i < 20 ; i++ ){
//     console.log('*'.repeat(i))
// }

// Question 10
// let arr = [1,2,3,4,5,6,7,8,9]
// let sum = 0
// arr.forEach((val)=>{
//     if(val%2===0){
// return sum = sum + val
//     }
// })
// let sum2 =  arr.reduce((sum,a)=>{
//     return sum = sum + a
// },0)
// console.log(sum)




// Pending Question (1)
//  5.Print all characters of a name using for-of