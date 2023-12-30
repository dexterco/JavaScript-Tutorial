//Generator Functions
function* myGenFun(){
    yield "Hello";
    yield ()=>{
        console.log("This is function calling");
    }
    yield [1,2,3]
    yield 10
}

const iterator = myGenFun()
console.log(iterator.next().value);
iterator.next().value();
console.log(iterator.next().value);
console.log(iterator.next().value);