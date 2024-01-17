const grigliaHtml = document.getElementById('griglia')
let startinput = document.getElementById( 'start')
let arrayBombe = []

do {

    let randomNum = randomica(100)

    if (!arrayBombe.includes(randomNum)) {

        arrayBombe.push(randomNum)
    }


} while (arrayBombe.length !== 16)

startinput.addEventListener('click', function(){
    document.getElementById("tabella").style.display = "block";
})

for (let i = 1; i <= 100; i++) {

    let box = document.createElement("div")

    box.classList.add("box")

    box.innerHTML = `<span>${i}</span>`

    box.addEventListener('click', function () {
        if(arrayBombe.includes(i)){
            box.classList.add('rosso')
            console.log("e presente")
        } else{
            box.classList.add('verde')
            console.log("non e presente")
        }       
    })

    grigliaHtml.append(box)

}

function randomica(max) {
    return Math.floor(Math.random() * max) + 1
}
