//Conditional Statement
//if,else,else if and switch statement

let age = 16
let city = "punjab"
if(age>=18 || city == "punjab"){
    console.log("You are eligible");
}else{
    console.log("You are not eligible");
}

//else if
if(age>=18){
    console.log("You are eligible and 18");
}else if(city == "punjab"){
    console.log("You are not eligible and from punjab");
}else{
    console.log("Not Eligible");
}

//Ternary Operator 
age>=18?console.log("Eligible from Ternary"):console.log("Not Elogible from Ternary");

//Switch Statement

let day = "Wednesday"

switch(day){
    case "Monday":
        console.log("It is first day of week");
        break;
    case "Tuesday":
        console.log("It is second day of week");
        break;  
    case "Wednesday":
        console.log("It is third of week");
        break;
    default:
        console.log("No day");      
}
