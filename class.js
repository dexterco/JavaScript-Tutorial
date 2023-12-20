//classes
class Car{
    //defining properties through constructor
    constructor(make,model,year,color){
        this.make = make
        this.model = model
        this.year = year
        this.color = color
    }

    //behaviour or methods
    start(){
        console.log(`${this.model} Car is started now`);
    }

    driving(){
        console.log(`${this.model} Car is running`);
    }

    stop(){
        console.log(`${this.model} Car is Stopped now`);
    }

    showDetails(){
        console.log(`Car Details: ${this.make} ${this.model} ${this.color} ${this.year}`);
    }
}

const toyota = new Car("Toyota","Camry",2022,"Black")
const mehran = new Car("Suzuki","Mehran",1995,"White")
const alto = new Car("Suzuki","Alto",2023,"Pink")
mehran.start()
toyota.start()
alto.showDetails()