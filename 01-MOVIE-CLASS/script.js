// a)
class Movie{
    constructor(title,studio,rating){
        this.title = title
        this.studio = studio
        this.rating = rating
    }
}

const screen1 = new Movie('Free Guy', '20th century fox', 'U')
console.log(screen1)

const screen4 = new Movie('Jungle Cruise', 'Disney', 'PG')

// b)
class Movie1{
    constructor(title,studio,rating = 'PG'){
        this.title = title
        this.studio = studio
        this.rating = rating
    }
}

const screen2 = new Movie1('Cruella', 'Disney')
console.log(screen2)


// d)
const screen3 = new Movie('Casino Royale', 'Eon Productions', 'PG13')
console.log(screen3)

// c)
let movieArray = []
movieArray.push(screen1,screen2,screen3,screen4)
console.log(movieArray)

const pgMovies = movieArray.filter((item)=>{
    return item.rating == 'PG'
})

console.log(pgMovies.map(item => item.title))