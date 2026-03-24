// This keyword special ha kyonki vo apni value situation ka hisab sa change keta hai

// this keyword in global scope
console.log(this) // window object


// function ka ander This ki value
function thisvalue(){
    console.log(this)
}
thisvalue()                             //Function ka nadar this ki value window hoti ha


// arrow function mein this ki value window hoti ha
let obj = {
    skill : `web designing`,
    duration : `3 months`,
    information : () => {
        console.log(this)
    }
}
obj.information()

// object ka andar this ki value
let object ={
    name : `Hassan`,
    Age : 20,
    info: function(){
        console.log(this)
    }
}
object.info()


// event handler
document.querySelector(`h1`)
.addEventListener(`click`, function(){
    this.style.color = `blue`      //event handler mein this ki value function hoti ha
})


// class ka andar this ki value
class Abcd{
    constructor(){
        console.log(`hassan`)
        this.a = 12
    }
}
let val =new Abcd()
console.log(val.a) 



                          //Arrow functin and lexical this
let object1 ={
    phusicalthis : () => {
        console.log(this)
    }
 }                           
 object1.phusicalthis()   //arrow function this ki valueparent sa leta ha
