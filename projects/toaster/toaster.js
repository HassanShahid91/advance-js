

function createtoaster(config){
    return function(str){
        let div = document.createElement(`div`)
        div.className = 
        `inline-block ${config.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}  px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300 w-64`

        document.querySelector(`.parent`).appendChild(div)

        if(config.positionX !== `right`|| config.positionY !== `top`){
            document.querySelector(`.parent`).className += 
                `${config.positionX === `right` ? `right-5` : `left-5`}
                 ${config.positionY === `top` ? `top-5` : `bottom-5`}`
        }


        div.textContent = str
         setTimeout(() => {
            document.querySelector(`.parent`).removeChild(div)
         }, config.duration * 1000)
         }
}

let toaster =createtoaster({
    positionX: `left`,
    positionY: `top`,
    theme: `dark`,
    duration: 3,
})

toaster(`This is toaster message`)
setTimeout(() => {
toaster(`this is another toaster`)
} , 2000)