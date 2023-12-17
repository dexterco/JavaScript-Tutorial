//Loops
let tableOf =3
// console.log(tableOf," x ",1," = ",tableOf*1);
// console.log(tableOf," x ",2," = ",tableOf*2);
// console.log(tableOf," x ",3," = ",tableOf*3);
// console.log(tableOf," x ",4," = ",tableOf*4);
// console.log(tableOf," x ",5," = ",tableOf*5);
// console.log(tableOf," x ",6," = ",tableOf*6);
// console.log(tableOf," x ",7," = ",tableOf*7);
// console.log(tableOf," x ",8," = ",tableOf*8);
// console.log(tableOf," x ",9," = ",tableOf*9);
// console.log(tableOf," x ",10," = ",tableOf*10);

//for loop

for(let i=0;i<10;i++){
    console.log(tableOf," x ",i+1," = ",tableOf*(i+1));
}


//while
let iterations = 1
while(iterations<=10){
    console.log(tableOf," x ",iterations," = ",tableOf*(iterations));
    iterations++
}
//do while loop
do{
    console.log(iterations);
    iterations++
}while(iterations=0)