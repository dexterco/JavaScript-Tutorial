//Objects
const Car = {
    //properties
    make:"Toyota",
    model:"Camry",
    year:2022,
    color:"Black",
    isRunning:false,
    //Behaviour
    start:function(){
        if(this.isRunning){
            console.log("Car is already Running");
        }else{
            console.log("Car is started now");
            this.isRunning = true
        }
    },
    driving:()=>{
        console.log("Car is driving");
    },
    stop:()=>{
        console.log("Car is stopped Now");
        this.isRunning = false
    }
}

console.log(`Car Details: ${Car.make} ${Car.model} ${Car.color} ${Car.year}`);
Car.start()
Car.driving()
Car.stop()

const Person = {}
Person.name = "Nabeel"
Person.age = 18

console.log(Person);