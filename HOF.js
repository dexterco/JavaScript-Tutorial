//A Function Returning String
const saveName = (name)=>{
  return name
}

//Higher Order Function
const sayHello  = (getName)=>{
 const myName = getName
 
 return function (){
   console.log(`Hi ${myName}`);
 }
}

const msg = sayHello(saveName("Nabeel"))
msg()





