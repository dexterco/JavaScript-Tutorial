//Functions
let a = 10
let b = 20
function sum(a,b){
 let c = a+b
 console.log(c);
}

//functions with no parameters and returning viod
function msg(){
    console.log("Anything");
}

//functions with parameters and returning viod
function msgShow(msg){
    console.log(msg);
}

// msgShow("Hi there")

//functions with parameters and returning Values
function returnSum(a,b){
    return a+b

}

const result = returnSum(2,1)
// console.log("Result Value is ",result);

//functions returning functions
function returnMeSomething(){
    function hi(){
        console.log("Hi Nabeel");
    }
    return hi
}

const resultOfHi = returnMeSomething()
// resultOfHi()

//Arrow functions
const product = (a,b)=>{
    return a*b
}

//Arrow functions
const product1 = (a,b)=> a*b

console.log(product1(3,5));

