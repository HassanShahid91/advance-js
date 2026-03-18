

function createtoaster(){
    return function(str){
        let div = document.createElement(`div`)
        div.className = 
        `inline-block bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300 w-64`
        document.querySelector(`parent`).appendChild(div)
        div.textContent = str
         }
}

let toaster =createtoaster({
    positionX: `right`,
    positionY: `top`,
    theme: `dark`,
    duration: 3,
})

toaster(`This is toaster message`)