//Exception Handling
const divide = (a,b)=>{
    if(b === 0){
        //raising custom exception
        throw new Error("Division by zero is not possible")
    }else{
        console.log(a/b);
    }
}


try{
    divide(3,2)
}catch(error){
    console.log(error);
}finally{
    console.log("Final call to clean up your mess");
}