//Array
let fruit="Mango"
let fruit1="Apple"

let fruits = ["Mango","Apple","Kiwi","Bananna"]

console.log(fruits);
//Push adds element at the last of array
fruits.push("Strawberry")
//Pop removes element from the end of array
fruits.pop()
console.log(fruits);
//shift removes first element from array
fruits.shift()
console.log(fruits);
//unshift adds first element to array
fruits.unshift("Strawberry")
console.log(fruits);

//Each Element printing
console.log(fruits[0]);

//for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//Getting Array Length
console.log(fruits.length);


//for Each loop
fruits.forEach((fruit)=>{
    console.log(fruit);
})

//Map and Filter Function 
let numbers = [1,2,3,4,5,6,7,8,9,10]

let doubleNumbers = numbers.map(function(number){
    return number*2
})

let doubleNumberArrowFunction = numbers.map(number => number*2)

//Filter Function
let evenNumbers = numbers.filter(function(number){
  return number%2 === 0
})

let evenNumbersWithArrowFunction = numbers.filter(number => number%2===0)



console.log(evenNumbersWithArrowFunction);


