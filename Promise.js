//promises
//Country Detail Application
console.log("Welcome To Country Details.com");
const getCountryDetail = async()=>{
    const result = await fetch("https://restcountries.com/v3.1/name/Pakistan")
    const countryDetail = await result.json()
    console.log(countryDetail[0].name.official);
}

getCountryDetail()

//Own Promise 
const myPromise = new Promise((resolve,reject)=>{
    let success = true
    if(success){
        resolve("You have received data succesfully")
    }else{
        reject("something went wrong")
    }
})

const getMyPromise = async ()=>{
    const res = await myPromise
    console.log(res);
}
getMyPromise()