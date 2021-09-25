class Circle {
    constructor(radius,color){
        this.radius = radius
        this.color = color
    }

    getRadius(){
        return this.radius
    }

    setRadius(rad){
        // console.log(rad)
        return this.radius = rad
    }

    getColor(){
        return this.color
    }

    setColor(col){
        return this.color = col
    }

    radToString(){
        var radStr = this.radius.toString()
        var cirColor = this.color.toString()
        console.log(typeof radStr)
        const str = `the current circle radius is ${radStr} and the color is ${cirColor}`
        return str
    }

    getArea(){
        var area = ((22/7) * (this.radius ** 2)).toFixed(2)
        return area
    }

    getCircumference(){
        var circumference = (2* (22/7) * (this.radius)).toFixed(2)
        return circumference
    }
}

const circle1 = new Circle(5,'red')

console.log(circle1.getRadius())
console.log(circle1.setRadius(10))
console.log(circle1.getColor())
console.log(circle1.setColor('green'))
console.log(circle1.radToString())
console.log(circle1.getArea())
console.log(circle1.getCircumference())