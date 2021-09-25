// base fare --> base fare varies according to the car type
// cost per km --> here I have taken fare for 1st 1km is rs.10 and then for rest of the kms fare is rs.5 
// car type

class Uber {
    constructor(name,carType,km){
        this.name = name
        this.carType = carType
        this.km = km
    }

    getFare(){
        if(this.carType === 'uberx'){
            // console.log(this.km)
            let baseFare = 50
            let finalFare = ((this.km - (this.km - 1)) * 10) + ((this.km - 1) * 5) + baseFare
            // console.log(finalFare)
            return finalFare
        }
        else if(this.carType === 'black'){
            let baseFare = 70
            let finalFare = ((this.km - (this.km - 1)) * 10) + ((this.km - 1) * 5) + baseFare
            return finalFare
        }
        else if(this.carType === 'suv'){
            let baseFare = 100
            let finalFare = ((this.km - (this.km - 1)) * 10) + ((this.km - 1) * 5) + baseFare
            return finalFare
        }
    }
}

const pass1 = new Uber('naveen','uberx',2)
console.log(`the fare for passenger ${pass1.name} is ${pass1.getFare()}`)

const pass2 = new Uber('kumar','black',2)
console.log(`the fare for passenger ${pass2.name} is ${pass2.getFare()}`)

const pass3 = new Uber('john','suv',2)
console.log(`the fare for passenger ${pass3.name} is ${pass3.getFare()}`)